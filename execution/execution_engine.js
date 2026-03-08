// execution/execution_engine.js

export function executeOrder(order) {

    const symbol = order.symbol
    const side = order.side
    const size = order.size
    const entry = order.entry
    const stop = order.stop
    const target = order.target


    const execution = {

        symbol: symbol,
        side: side,
        size: size,

        entry: entry,
        stop: stop,
        target: target,

        status: "EXECUTED",

        timestamp: Date.now()

    }


    return execution

}
