import json
from google.protobuf import json_format, message
import logging
import settings

BIDS_HEADER = f"{'-'*10} BIDS {'-'*10}\n"
ASKS_HEADER = f"{'-'*10} ASKS {'-'*10}\n"

def as_debug_string(msg: message.Message) -> str:
    return json.dumps(json_format.MessageToDict(msg))

def config_logging():
    # root logger
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    # pricebook logger
    pb_logger = logging.getLogger('pricebook')
    pb_logger.setLevel(logging.DEBUG)
    # orderbook logger
    ob_logger = logging.getLogger('orderbook')
    ob_logger.setLevel(logging.DEBUG)
    # loggers
    loggers = [logger, pb_logger, ob_logger]
    # console
    handler = logging.StreamHandler()
    handler.setLevel(logging.WARN)
    for lgr in loggers:
        lgr.addHandler(handler)
    # data file
    handler = logging.FileHandler(settings.LOG_FILE, 'w')
    handler.setLevel(settings.LOG_LEVEL)
    formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    handler.setFormatter(formatter)
    for lgr in loggers:
        lgr.addHandler(handler)
    # error file
    handler = logging.FileHandler(settings.ERR_LOG_FILE, 'w')
    handler.setLevel(settings.ERR_LOG_LEVEL)
    handler.setFormatter(formatter)
    for lgr in loggers:
        lgr.addHandler(handler)
    # other loggers
    logging.getLogger('websockets').setLevel(logging.INFO)
    logging.getLogger('asyncio').setLevel(logging.INFO)
