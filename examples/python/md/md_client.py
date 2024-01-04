from websockets.client import WebSocketClientProtocol
import asyncio
import time
import logging
from collections.abc import Callable

from cube_ws_api import market_data_pb2
import util

async def do_heartbeat(ws: WebSocketClientProtocol) -> None:
    while True:
        await asyncio.sleep(10)
        hb = market_data_pb2.Heartbeat(
            request_id=0,
            timestamp=time.time_ns(),
        )
        logging.debug(f'Heartbeat: {util.as_debug_string(hb)}')
        await ws.send(market_data_pb2.ClientMessage(heartbeat=hb).SerializeToString())

async def handle_md(
    ws: WebSocketClientProtocol, 
    md_msg_process_fn: Callable[[market_data_pb2.MdMessages], None],
) -> None:
    while True:
        msg = await ws.recv()
        md = market_data_pb2.MdMessages()
        md = md.FromString(msg)
        md_msg_process_fn(md)