let trades = []
let candles = []

export function storeTrade(trade){

trades.push(trade)

if(trades.length > 500){
trades.shift()
}

}

export function storeCandle(candle){

candles.push(candle)

if(candles.length > 500){
candles.shift()
}

}

export function getTrades(){

return trades

}

export function getCandles(){

return candles

}
