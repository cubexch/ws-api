from websockets.client import WebSocketClientProtocol
import asyncio
import time
import logging
from collections.abc import Callable
from pathlib import Path
import os

from cube_ws_api import market_data_pb2
import util
import settings

async def do_heartbeat(ws: WebSocketClientProtocol) -> None:
    while True:
        await asyncio.sleep(10)
        hb = market_data_pb2.Heartbeat(
            request_id=0,
            timestamp=time.time_ns(),
        )
        logging.debug(f'Heartbeat: {util.as_debug_string(hb)}')
        await ws.send(market_data_pb2.ClientMessage(heartbeat=hb).SerializeToString())

async def dump_book(book, interval: int, levels_only: bool = True):
    Path(settings.BOOK_DATA_DIR).mkdir(parents=True, exist_ok=True)
    book_idx = 0
    while True:
        await asyncio.sleep(interval)
        book_fname = f"book_{settings.MARKET_ID}_{book_idx}.txt"
        book_fname = os.path.join(settings.BOOK_DATA_DIR, book_fname)
        print(f"dump book {book_fname}")
        if levels_only:
            book.dump(book_fname)
        else:
            book.dump(book_fname, False)
        book_idx = book_idx + 1

async def handle_md(
    ws: WebSocketClientProtocol, 
    md_msg_process_fn: Callable[[market_data_pb2.MdMessages], None],
) -> None:
    while True:
        msg = await ws.recv()
        md = market_data_pb2.MdMessages()
        md = md.FromString(msg)
        md_msg_process_fn(md)
