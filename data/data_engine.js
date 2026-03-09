import { startStream } from "./websocket_stream.js"
import { loadDataset } from "./dataset_loader.js"
import { startRegime } from "../models/regime_model.js"

import { storeTrade, storeCandle } from "../storage/market_store.js"

import { evaluateRisk } from "../risk/risk_engine.js"
import { generateSignal } from "../strategy/strategy_engine.js"
import { executeOrder } from "../execution/execution_engine.js"



export function startDataEngine(){

    const streamPanel = document.getElementById("streamPanel")
    const datasetPanel = document.getElementById("datasetPanel")
    const regimePanel = document.getElementById("regimePanel")



    /*
    =============================
    MARKET STREAM
    =============================
    */

    startStream(streamPanel, (trade)=>{

        storeTrade(trade)

        const price = trade.price



        /*
        =============================
        BUILD ANALYSIS DATA
        =============================
        */

        const data = {

            mlScore: Math.random() * 2 - 1,

            orderflow: {
                buyPressure: Math.random(),
                sellPressure: Math.random()
            },

            liquidity: {
                liquidityPressure: Math.random() * 0.2 - 0.1
            }

        }



        /*
        =============================
        STRATEGY ENGINE
        =============================
        */

        const signal = generateSignal(data)

        if(signal === "NO TRADE") return



        /*
        =============================
        TRADE SETUP
        =============================
        */

        const tradeSetup = {

            entry: price,
            stop: price - 100,
            target: price + 200,

            capital: 10000,
            riskPercent: 0.01

        }



        /*
        =============================
        RISK ENGINE
        =============================
        */

        const risk = evaluateRisk(tradeSetup)



        /*
        =============================
        EXECUTION ENGINE
        =============================
        */

        const order = executeOrder({

            symbol: "BTCUSDT",

            side: signal === "LONG" ? "BUY" : "SELL",

            size: risk.positionSize,

            entry: tradeSetup.entry,
            stop: tradeSetup.stop,
            target: tradeSetup.target

        })



        console.log("EXECUTED ORDER")
        console.log(order)

    })



    /*
    =============================
    DATASET ENGINE
    =============================
    */

    loadDataset(datasetPanel, (candle)=>{

        storeCandle(candle)

    })



    /*
    =============================
    REGIME ENGINE
    =============================
    */

    startRegime(regimePanel)

}
