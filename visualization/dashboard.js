// visualization/dashboard.js

export function updateDashboard(data) {

    const mlScore = data.mlScore
    const orderflow = data.orderflow
    const liquidity = data.liquidity
    const signal = data.signal
    const capital = data.capital


    const dashboard = {

        mlScore: mlScore,

        buyPressure: orderflow.buyPressure,
        sellPressure: orderflow.sellPressure,

        liquidityPressure: liquidity.liquidityPressure,

        signal: signal,

        capital: capital,

        timestamp: Date.now()

    }


    console.log("BirVal Dashboard")
    console.table(dashboard)


    return dashboard

}
