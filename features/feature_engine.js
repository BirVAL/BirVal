// features/feature_engine.js

import {
    calculateVolatility,
    calculateMomentum
} from "../processing/market_metrics.js"



export function buildMarketFeatures(marketData) {

    const prices = marketData.prices
    const volumes = marketData.volumes
    const bid = marketData.bid
    const ask = marketData.ask
    const bidVolume = marketData.bidVolume
    const askVolume = marketData.askVolume


    const volatility = calculateVolatility(prices)

    const momentumShort = calculateMomentum(prices, 5)

    const momentumLong = calculateMomentum(prices, 20)


    const trendStrength = momentumShort - momentumLong


    const volumeAvg =
        volumes.slice(-20).reduce((a, b) => a + b, 0) / 20

    const volumeCurrent = volumes[volumes.length - 1]

    const volumeAnomaly = volumeCurrent / volumeAvg


    const spread = ask - bid


    const liquidityImbalance =
        (bidVolume - askVolume) / (bidVolume + askVolume)



    return {

        volatility,

        momentumShort,

        momentumLong,

        trendStrength,

        volumeAnomaly,

        spread,

        liquidityImbalance

    }

}
