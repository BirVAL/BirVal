import {startStream} from "./websocket_stream.js"
import {loadDataset} from "./dataset_loader.js"
import {startRegime} from "../models/regime_model.js"

export function startDataEngine(){

const streamPanel = document.getElementById("streamPanel")
const datasetPanel = document.getElementById("datasetPanel")
const regimePanel = document.getElementById("regimePanel")

startStream(streamPanel)
loadDataset(datasetPanel)
startRegime(regimePanel)

}
