export function updateDashboard(data){

    const panel = document.getElementById("dashboardPanel")

    if(!panel) return

    const capital = data.capital
    const positions = data.positionsOpen
    const pnl = data.realizedPnL

    panel.innerHTML = `

Capital: ${capital.toFixed(2)}
<br>
Open Positions: ${positions}
<br>
Realized PnL: ${pnl.toFixed(2)}

`

}
