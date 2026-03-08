// processing/market_metrics.js

export function calculateVolatility(prices) {

    if (prices.length < 2) return 0

    let returns = []

    for (let i = 1; i < prices.length; i++) {
        let r = (prices[i] - prices[i - 1]) / prices[i - 1]
        returns.push(r)
    }

    let mean = returns.reduce((a, b) => a + b, 0) / returns.length

    let variance =
        returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) /
        returns.length

    return Math.sqrt(variance)
}



export function calculateMomentum(prices, period = 10) {

    if (prices.length < period) return 0

    let start = prices[prices.length - period]
    let end = prices[prices.length - 1]

    return (end - start) / start
}



export function calculateVolumeSpike(volumes) {

    if (volumes.length < 20) return 0

    let avg =
        volumes.slice(-20).reduce((a, b) => a + b, 0) / 20

    let current = volumes[volumes.length - 1]

    return current / avg
}



export function calculateSpread(bid, ask) {

    if (!bid || !ask) return 0

    return ask - bid
}



export function calculateLiquidityPressure(bidVolume, askVolume) {

    if (!bidVolume || !askVolume) return 0

    return (bidVolume - askVolume) / (bidVolume + askVolume)
}
