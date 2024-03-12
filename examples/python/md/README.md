# Cube Market Data Example

This is an example of getting the MBP or MBO feed from CUBE Exchange.

## Installation

Use pip to install the required Python packages for the example.

```bash
pip install -r requirements.txt
```

## Run the Example

```console
usage: main.py [-h] [-t {mbo,mbp}] [-d] [-i INTERVAL] [-o]

example program to stream and process Cube market data

options:
  -h, --help            show this help message and exit
  -t {mbo,mbp}, --book_type {mbo,mbp}
                        MBO(market by order) or MBP(market by price)
  -d, --dump            dump the book at intervals
  -i INTERVAL, --interval INTERVAL
                        book dump interval in number of seconds
  -o, --orders          for an order book, only dump orders instead of levels
```

Note that `market_id` is specified in `settings.py`. If you want to dump the book
at certain intervals, the `BOOK_DATA_DIR` in `settings.py` is the directory to put
the dumped book data. The filename is in the format of `book_<market_id>_<interval_idx>.txt`.