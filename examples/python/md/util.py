import json
from google.protobuf import json_format, message

def as_debug_string(msg: message.Message) -> str:
    return json.dumps(json_format.MessageToDict(msg))