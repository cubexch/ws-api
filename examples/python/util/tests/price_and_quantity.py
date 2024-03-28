import unittest

from cube_ws_api_util import parse_price_and_quantity, Market

class MarketsSmoke(unittest.TestCase):
    def test_parse_price_and_quantity(self):
        self.assertEqual(
            (6123, 145),
            parse_price_and_quantity(
                Market(
                    symbol="",
                    market_id=1,
                    base_asset_id=2,
                    quote_asset_id=3,
                    base_lot_size=10000000,
                    quote_lot_size=100,
                    base_decimals=9,
                    quote_decimals=6,
                    price_precision=8,
                ),
                "61.23",
                "1.45",
            )
        )

        self.assertEqual(
            (221945, 1523),
            parse_price_and_quantity(
                Market(
                    symbol="",
                    market_id=1,
                    base_asset_id=2,
                    quote_asset_id=3,
                    base_lot_size=1000000000000000,
                    quote_lot_size=10,
                    base_decimals=18,
                    quote_decimals=6,
                    price_precision=8,
                ),
                "2219.455",
                "1.523",
            )
        )

        self.assertEqual(
            (813, 999),
            parse_price_and_quantity(
                Market(
                    symbol="",
                    market_id=1,
                    base_asset_id=2,
                    quote_asset_id=3,
                    base_lot_size=10000000,
                    quote_lot_size=1,
                    base_decimals=5,
                    quote_decimals=6,
                    price_precision=8,
                ),
                "0.00000813",
                "99900",
            )
        )

