// portfolio/portfolio_manager.js

export class PortfolioManager {

    constructor(initialCapital = 10000) {

        this.initialCapital = initialCapital
        this.capital = initialCapital

        this.positions = []

        this.realizedPnL = 0

    }



    openPosition(position) {

        this.positions.push(position)

    }



    closePosition(index, exitPrice) {

        const position = this.positions[index]

        const pnl =
            (exitPrice - position.entry) * position.size

        this.realizedPnL += pnl

        this.capital += pnl

        this.positions.splice(index, 1)

        return pnl

    }



    getPortfolioValue(currentPrice) {

        let unrealized = 0

        for (let pos of this.positions) {

            unrealized +=
                (currentPrice - pos.entry) * pos.size

        }

        return this.capital + unrealized

    }



    getStats() {

        return {

            capital: this.capital,
            positionsOpen: this.positions.length,
            realizedPnL: this.realizedPnL

        }

    }

}
