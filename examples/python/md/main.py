import asyncio
from websockets.client import connect as ws_connect
from websockets.exceptions import ConnectionClosed
import logging

import settings
import price_book
import md_client

def config_logging():
    rootLogger = logging.getLogger()
    rootLogger.addHandler(logging.StreamHandler())
    rootLogger.addHandler(logging.FileHandler(settings.LOG_FILE))
    rootLogger.setLevel(settings.LOG_LEVEL)
    logging.getLogger('websockets').setLevel(logging.INFO)

async def main():
    market_id = 300001
    book_conn_str = f"{settings.CUBE_MD_WS}/book/{market_id}?mbp=true"
    try:
        async with ws_connect(book_conn_str) as ws:
            prc_bk = price_book.PriceBook()
            book_task = asyncio.create_task(md_client.handle_md(ws, prc_bk.process_md_messages))
            hb_task = asyncio.create_task(md_client.do_heartbeat(ws))
            await book_task
            await hb_task
    except ConnectionClosed as e:
        logging.error(f'Connection closed unexpectedly: {e})')
        if hb_task is not None:
            if hb_task.done():
                hb_e = hb_task.exception()
                if hb_e is not None:
                    logging.info(f'Heartbeat task exception: {hb_e}')
            else:
                hb_task.cancel()
                logging.info(f'Heartbeat task canceled')

if __name__ == '__main__':
    config_logging()
    asyncio.run(main())