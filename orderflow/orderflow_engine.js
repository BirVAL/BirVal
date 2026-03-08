// orderflow/orderflow_engine.js

export function analyzeOrderflow(orderbook) {

    const bids = orderbook.bids
    const asks = orderbook.asks


    let totalBidVolume = 0
    let totalAskVolume = 0


    for (let i = 0; i < bids.length; i++) {
        totalBidVolume += bids[i][1]
    }


    for (let i = 0; i < asks.length; i++) {
        totalAskVolume += asks[i][1]
    }


    const orderflowDelta = totalBidVolume - totalAskVolume


    const volumeImbalance =
        (totalBidVolume - totalAskVolume) /
        (totalBidVolume + totalAskVolume)


    const buyPressure =
        totalBidVolume / (totalBidVolume + totalAskVolume)


    const sellPressure =
        totalAskVolume / (totalBidVolume + totalAskVolume)


    return {

        orderflowDelta,

        volumeImbalance,

        buyPressure,

        sellPressure

    }

}
