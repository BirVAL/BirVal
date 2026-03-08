// liquidity/liquidity_engine.js

export function analyzeLiquidity(orderbook) {

    const bids = orderbook.bids
    const asks = orderbook.asks


    let largestBid = 0
    let largestAsk = 0

    let bidWallPrice = null
    let askWallPrice = null


    for (let i = 0; i < bids.length; i++) {

        if (bids[i][1] > largestBid) {

            largestBid = bids[i][1]
            bidWallPrice = bids[i][0]

        }

    }


    for (let i = 0; i < asks.length; i++) {

        if (asks[i][1] > largestAsk) {

            largestAsk = asks[i][1]
            askWallPrice = asks[i][0]

        }

    }


    const liquidityPressure =
        (largestBid - largestAsk) /
        (largestBid + largestAsk)


    return {

        bidWallPrice,
        askWallPrice,

        largestBid,
        largestAsk,

        liquidityPressure

    }

}
