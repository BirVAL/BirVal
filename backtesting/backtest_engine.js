// backtesting/backtest_engine.js

export class BacktestEngine {

    constructor(initialCapital = 10000) {

        this.initialCapital = initialCapital
        this.capital = initialCapital

        this.trades = []

        this.wins = 0
        this.losses = 0

        this.equityCurve = []

    }



    executeTrade(trade) {

        const pnl = trade.pnl

        this.capital += pnl

        this.trades.push(trade)

        if (pnl > 0) this.wins++
        else this.losses++

        this.equityCurve.push(this.capital)

    }



    getStats() {

        const totalTrades = this.trades.length

        const winrate =
            totalTrades > 0
                ? this.wins / totalTrades
                : 0


        const profit =
            this.capital - this.initialCapital


        return {

            totalTrades,
            wins: this.wins,
            losses: this.losses,
            winrate,
            profit,
            finalCapital: this.capital

        }

    }

}
