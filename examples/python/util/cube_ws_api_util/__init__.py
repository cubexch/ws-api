import typing

class PriceMultiplier:
    mul: int

    def __init__(self, mul: int):
        self.mul = mul

    def price_in_lots(self, price: int) -> int:
        return price // self.mul



class Market:
    # properties from cube.exchange
    symbol: str
    market_id: int
    base_asset_id: int
    quote_asset_id: int
    base_lot_size: int
    quote_lot_size: int
    base_decimals: int
    quote_decimals: int
    price_precision: int
    price_multiplier: PriceMultiplier

    def __init__(
        self,
        symbol: str,
        market_id: int,
        base_asset_id: int,
        quote_asset_id: int,
        base_lot_size: int,
        quote_lot_size: int,
        base_decimals: int,
        quote_decimals: int,
        price_precision: int,
    ):
        self.symbol = symbol
        self.market_id = market_id
        self.base_asset_id = base_asset_id
        self.quote_asset_id = quote_asset_id
        self.base_lot_size = base_lot_size
        self.quote_lot_size = quote_lot_size
        self.base_decimals = base_decimals
        self.quote_decimals = quote_decimals
        self.price_precision = price_precision
        self.price_multiplier = price_multiplier_for(
            price_precision,
            base_decimals,
            quote_decimals,
            base_lot_size,
            quote_lot_size,
        )


def get_markets(exchange_info) -> typing.List[Market]:
    all_markets = exchange_info['markets']
    all_assets = exchange_info['assets']

    markets = []
    for market in all_markets:
        symbol = market['symbol']
        market_id = market['marketId']
        base_asset_id = market['baseAssetId']
        quote_asset_id = market['quoteAssetId']
        base_lot_size = int(market['baseLotSize'])
        quote_lot_size = int(market['quoteLotSize'])
        base_decimals = next((a['decimals'] for a in all_assets if a['assetId'] == base_asset_id), None)
        quote_decimals = next((a['decimals'] for a in all_assets if a['assetId'] == quote_asset_id), None)

        if not base_decimals:
            raise Exception(f'Unknown baseAssetId {base_asset_id} for symbol {symbol}')
        if not quote_decimals:
            raise Exception(f'Unknown quoteAssetId {quote_asset_id} for symbol {symbol}')

        market = Market(
            symbol,
            market_id,
            base_asset_id,
            quote_asset_id,
            base_lot_size,
            quote_lot_size,
            base_decimals,
            quote_decimals,
            18,  # we get converted to price-18 in quotes.py
        )

        markets.append(market)

    return markets


def parse_fixed(val: str, precision: int) -> int:
    parts = val.split('.')
    if len(parts) == 0 or len(parts) > 2:
        raise Exception('Invalid number')

    hi = int(parts[0])

    if len(parts) == 1:
        lo = 0
    else:
        cmp_result = len(parts[1]) - precision
        if cmp_result == 0:
            lo = int(parts[1])
        elif cmp_result < 0:
            padded = parts[1].ljust(precision, '0')
            lo = int(padded)
        else:
            lo = int(parts[1][:precision])

    return 10 ** precision * hi + lo


def parse_price_and_quantity(
    market: Market,
    price_str: str,
    quantity_str: str,
) -> typing.Tuple[int, int]:
    # e.g "61.23" -> 61_2300_0000
    price = parse_fixed(price_str, market.price_precision)

    # convert to quote decimal units / base unit
    #
    # e.g for USDC, quote_decimals = 6
    # 61_2300_0000 -> 61_230_000
    #
    # multiplier for converting quote units to cube price
    # e.g for SOLUSDC
    # - base_lot_size = 10_000_000
    # - quote_lot_size = 100
    # - base_decimals = 9
    #
    # so divisor = 10^9 * 100 / 10_000_000 = 10_000
    #    price = 61_230_000 / 10_000 = 6_123
    price = market.price_multiplier.price_in_lots(price)

    # e.g "1.45" -> 1_4500_0000
    quantity = parse_fixed(quantity_str, 8)

    # multiplier for converting to base units to cube quantity
    # e.g for SOLUSDC
    # - base_lot_size = 10_000_000
    # - base_decimals = 9
    #
    # so divisor = 10_000_000 * 10^8 / 10^9 = 1_000_000
    #    price = 1_4500_0000 / 1_000_000 = 145
    quantity_divisor = quantity_multiplier_for(
        8,
        market.base_decimals,
        market.base_lot_size,
    )
    quantity //= quantity_divisor
    return (price, quantity)


def price_multiplier_for(
    price_precision: int,
    base_asset_decimals: int,
    quote_asset_decimals: int,
    base_lot_size: int,
    quote_lot_size: int,
) -> PriceMultiplier:
    # human-readable price
    #   = quote units / base units
    #     quote lots   quote decimal units   base lot size        base decimal units   quote units
    #   = ---------- * ------------------- * ------------------ * ------------------ * -------------------
    #     base lots    quote lot size        base decimal units   base units           quote decimal units
    #
    #
    # the submitted price is quote lots / base lots (which should be a whole
    # number). if we parse the human-readable price into a whole number by
    # multiplying by 10**quote decimals, then we divide by this 'multiplier'
    # after to get the submitted price.

    num = quote_lot_size * 10**price_precision * 10**base_asset_decimals
    den = base_lot_size * 10**quote_asset_decimals

    if num % den != 0:
        raise Exception('Insufficient precision: fractional price')

    return PriceMultiplier(num // den)


def quantity_multiplier_for(
    quantity_precision: int,
    base_decimals: int,
    base_lot_size: int,
) -> int:
    # human-readable quantity
    #   = base units
    #                 base decimal units   base units
    #   = base lots * ------------------ * ------------------
    #                 base lot size        base decimal units
    #
    # the submitted quantity is base lots (which should be a whole number). if
    # we parse the human-readable quantity into a whole number by multiplying by
    # 10**base decimals, then we divide by this 'multiplier' after to get the
    # submitted quantity lots.

    multiplier = base_lot_size * 10**quantity_precision

    if multiplier % 10**base_decimals != 0:
        raise Exception('Insufficient precision: fractional quantity')

    multiplier //= 10**base_decimals

    return multiplier
