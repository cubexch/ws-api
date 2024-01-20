import asyncio
from websockets.client import connect as ws_connect
from websockets.exceptions import ConnectionClosed
import logging

import settings
import price_book
import order_book
import md_client
import util

async def price_book_main():
    market_id = settings.MARKET_ID
    book_conn_str = f"{settings.CUBE_MD_WS}/book/{market_id}?mbp=true"
    try:
        async with ws_connect(book_conn_str) as ws:
            prc_bk = price_book.PriceBook()
            book_coro = md_client.handle_md(ws, prc_bk.process_md_messages)
            hb_coro = md_client.do_heartbeat(ws)
            group = asyncio.gather(book_coro, hb_coro)
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

async def order_book_main():
    market_id = settings.MARKET_ID
    book_conn_str = f"{settings.CUBE_MD_WS}/book/{market_id}?mbo=true"
    try:
        async with ws_connect(book_conn_str) as ws:
            ord_bk = order_book.OrderBook()
            book_coro = md_client.handle_md(ws, ord_bk.process_md_messages)
            hb_coro = md_client.do_heartbeat(ws)
            group = asyncio.gather(book_coro, hb_coro)
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

if __name__ == '__main__':
    util.config_logging()
    try:
        asyncio.run(order_book_main())
    except KeyboardInterrupt:
        logging.info("exit.")
