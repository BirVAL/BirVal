export function updateDashboard(data){

    const capital = data.capital
    const positionsOpen = data.positionsOpen
    const realizedPnL = data.realizedPnL



    const dashboard = {

        capital: capital,
        positions: positionsOpen,
        realizedPnL: realizedPnL,
        timestamp: Date.now()

    }



    console.log("DASHBOARD UPDATE")
    console.log(dashboard)

}
