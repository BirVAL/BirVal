export function startStream(panel){

function connect(){

try{

const socket = new WebSocket(
"wss://stream.binance.com:9443/ws/btcusdt@trade"
)

socket.onopen = function(){
panel.innerHTML="Stream connected"
}

socket.onmessage = function(event){

const data = JSON.parse(event.data)

panel.innerHTML =
"BTC Price: "+data.p+
"<br>Trade Size: "+data.q

}

socket.onerror = function(){
panel.innerHTML="Stream error"
}

socket.onclose = function(){
panel.innerHTML="Reconnecting..."
setTimeout(connect,3000)
}

}catch(e){

panel.innerHTML="WebSocket failed"

}

}

connect()

}
