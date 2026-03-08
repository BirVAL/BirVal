import {startStream} from "./websocket_stream.js"
import {loadDataset} from "./dataset_loader.js"
import {startRegime} from "../models/regime_model.js"

import {storeTrade, storeCandle} from "../storage/market_store.js"


export function startDataEngine(){

const streamPanel = document.getElementById("streamPanel")
const datasetPanel = document.getElementById("datasetPanel")
const regimePanel = document.getElementById("regimePanel")


/* =============================
   MARKET STREAM
============================= */

startStream(streamPanel, (trade)=>{

storeTrade(trade)

})


/* =============================
   DATASET ENGINE
============================= */

loadDataset(datasetPanel, (candle)=>{

storeCandle(candle)

})


/* =============================
   MARKET REGIME MODEL
============================= */

startRegime(regimePanel)

}
