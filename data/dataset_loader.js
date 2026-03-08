export async function loadDataset(panel, callback){

try{

const res = await fetch(
"https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=200"
)

const data = await res.json()

panel.innerHTML =
"Candles loaded: "+data.length

if(callback){

data.forEach(candle => {

callback(candle)

})

}

}catch(e){

panel.innerHTML="Dataset load error"

}

}
