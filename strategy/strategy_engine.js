// strategy/strategy_engine.js

export function generateSignal(data) {

    const mlScore = data.mlScore
    const orderflow = data.orderflow
    const liquidity = data.liquidity


    let score = 0


    if (mlScore > 0.5) score += 1
    if (mlScore < -0.5) score -= 1


    if (orderflow.buyPressure > 0.6) score += 1
    if (orderflow.sellPressure > 0.6) score -= 1


    if (liquidity.liquidityPressure > 0.1) score += 1
    if (liquidity.liquidityPressure < -0.1) score -= 1


    if (score >= 2) {

        return "LONG"

    }

    if (score <= -2) {

        return "SHORT"

    }

    return "NO TRADE"

}
