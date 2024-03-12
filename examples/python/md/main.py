import asyncio
from websockets.client import connect as ws_connect
from websockets.exceptions import ConnectionClosed
import logging
import argparse

import settings
import price_book
import order_book
import md_client
import util

async def price_book_main(dump: bool, interval: int):
    market_id = settings.MARKET_ID
    book_conn_str = f"{settings.CUBE_MD_WS}/book/{market_id}?mbp=true"
    try:
        async with ws_connect(book_conn_str) as ws:
            prc_bk = price_book.PriceBook()
            book_coro = md_client.handle_md(ws, prc_bk.process_md_messages)
            hb_coro = md_client.do_heartbeat(ws)
            coros = [book_coro, hb_coro]
            if dump:
                coros.append(md_client.dump_book(prc_bk, interval))
            group = asyncio.gather(*coros)
            await group
    except ConnectionClosed as e:
        logging.error(f'Connection closed unexpectedly: {e})')
        if group is not None:
            if group.done():
                ex = group.exception()
                if ex is not None:
                    logging.info(f'Task exception: {ex}')
            else:
                group.cancel()
                logging.info(f'Task group canceled')

async def order_book_main(dump: bool, interval: int, levels_only: bool):
    market_id = settings.MARKET_ID
    book_conn_str = f"{settings.CUBE_MD_WS}/book/{market_id}?mbo=true"
    try:
        async with ws_connect(book_conn_str) as ws:
            ord_bk = order_book.OrderBook()
            book_coro = md_client.handle_md(ws, ord_bk.process_md_messages)
            hb_coro = md_client.do_heartbeat(ws)
            coros = [book_coro, hb_coro]
            if dump:
                coros.append(md_client.dump_book(ord_bk, interval, levels_only))
            group = asyncio.gather(*coros)
            await group
    except ConnectionClosed as e:
        logging.error(f'Connection closed unexpectedly: {e})')
        if group is not None:
            if group.done():
                ex = group.exception()
                if ex is not None:
                    logging.info(f'Task exception: {ex}')
            else:
                group.cancel()
                logging.info(f'Task group canceled')

def parse_args():
    parser = argparse.ArgumentParser(
                prog='main.py',
                description='example program to stream and process Cube market data')
    parser.add_argument('-t', '--book_type', default='mbo', choices=['mbo', 'mbp'], 
                        help="MBO(market by order) or MBP(market by price)")
    parser.add_argument('-d', '--dump', help="dump the book at intervals", action="store_true")
    parser.add_argument('-i', '--interval', default=2, help="book dump interval in number of seconds")
    parser.add_argument('-o', '--orders', help="for an order book, only dump orders instead of levels", 
                        action="store_true")
    args = parser.parse_args()
    return args

if __name__ == '__main__':
    util.config_logging()
    args = parse_args()
    print(args)
    book_coro = order_book_main if args.book_type == 'mbo' else price_book_main
    try:
        asyncio.run(book_coro(args.dump, args.interval, not args.orders))
    except KeyboardInterrupt:
        logging.info("exit.")
