export function startRegime(panel){

async function load(){

try{

const res = await fetch(
"https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
)

const btc = await res.json()

let change = parseFloat(btc.priceChangePercent)

let regime = "SIDEWAYS"

if(change > 2) regime = "BULL TREND"
if(change < -2) regime = "BEAR TREND"

panel.innerHTML =
"BTC 24h: " + change + "%" +
"<br>" + regime

}catch(e){

panel.innerHTML = "Regime error"

}

}

load()

setInterval(load,5000)

}
