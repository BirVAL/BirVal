import { startStream } from "./websocket_stream.js"
import { loadDataset } from "./dataset_loader.js"
import { startRegime } from "../models/regime_model.js"

import { storeTrade, storeCandle } from "../storage/market_store.js"

import { evaluateRisk } from "../risk/risk_engine.js"
import { generateSignal } from "../strategy/strategy_engine.js"
import { executeOrder } from "../execution/execution_engine.js"

import { PortfolioManager } from "../portfolio/portfolio_manager.js"
import { updateDashboard } from "../visualization/dashboard.js"



export function startDataEngine(){

const streamPanel = document.getElementById("streamPanel")
const datasetPanel = document.getElementById("datasetPanel")
const regimePanel = document.getElementById("regimePanel")

const portfolio = new PortfolioManager(10000)



/*
====================
MARKET STREAM
====================
*/

startStream(streamPanel,(trade)=>{

storeTrade(trade)

const price = trade.price



/*
====================
POSITION MANAGER
====================
*/

for(let i = portfolio.positions.length - 1; i >= 0; i--){

const pos = portfolio.positions[i]

if(price >= pos.target || price <= pos.stop){

portfolio.closePosition(i,price)

}

}



/*
====================
BUILD ANALYSIS DATA
====================
*/

const data = {

mlScore: Math.random()*2 - 1,

orderflow:{
buyPressure: Math.random(),
sellPressure: Math.random()
},

liquidity:{
liquidityPressure: Math.random()*0.2 - 0.1
}

}



/*
====================
STRATEGY ENGINE
====================
*/

const signal = generateSignal(data)

if(signal === "NO TRADE") return



/*
====================
TRADE SETUP
====================
*/

const tradeSetup = {

entry: price,

stop: price - 5,

target: price + 5,

capital: portfolio.capital,

riskPercent: 0.01

}



/*
====================
RISK ENGINE
====================
*/

const risk = evaluateRisk(tradeSetup)



/*
====================
EXECUTION ENGINE
====================
*/

const order = executeOrder({

symbol:"BTCUSDT",

side: signal === "LONG" ? "BUY" : "SELL",

size: risk.positionSize,

entry: tradeSetup.entry,

stop: tradeSetup.stop,

target: tradeSetup.target

})



portfolio.openPosition(order)



/*
====================
PORTFOLIO UPDATE
====================
*/

const stats = portfolio.getStats()

updateDashboard({

capital: stats.capital,
positionsOpen: stats.positionsOpen,
realizedPnL: stats.realizedPnL

})

})



/*
====================
DATASET ENGINE
====================
*/

loadDataset(datasetPanel,(candle)=>{

storeCandle(candle)

})



/*
====================
REGIME ENGINE
====================
*/

startRegime(regimePanel)

}
