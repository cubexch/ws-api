import json
from google.protobuf import json_format, message
import logging
import settings

def as_debug_string(msg: message.Message) -> str:
    return json.dumps(json_format.MessageToDict(msg))

def config_logging():
    # root logger
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    # pricebook logger
    logger = logging.getLogger('pricebook')
    logger.setLevel(logging.DEBUG)
    # orderbook logger
    logger = logging.getLogger('orderbook')
    logger.setLevel(logging.DEBUG)
    # console
    handler = logging.StreamHandler()
    handler.setLevel(logging.WARN)
    logger.addHandler(handler)
    # data file
    handler = logging.FileHandler(settings.LOG_FILE, 'w')
    handler.setLevel(settings.LOG_LEVEL)
    formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    # error file
    handler = logging.FileHandler(settings.ERR_LOG_FILE, 'w')
    handler.setLevel(settings.ERR_LOG_LEVEL)
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    # other loggers
    logging.getLogger('websockets').setLevel(logging.INFO)
    logging.getLogger('asyncio').setLevel(logging.INFO)
