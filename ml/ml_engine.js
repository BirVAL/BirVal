// ml/ml_engine.js

export class BirValML {

    constructor() {

        this.dataset = []

        this.weights = {
            volatility: -0.3,
            momentumShort: 0.6,
            momentumLong: 0.3,
            trendStrength: 0.8,
            volumeAnomaly: 0.5,
            spread: -0.4,
            liquidityImbalance: 0.7
        }

    }



    updateDataset(features) {

        this.dataset.push(features)

        if (this.dataset.length > 1000) {
            this.dataset.shift()
        }

    }



    predict(features) {

        let score = 0

        score += features.volatility * this.weights.volatility
        score += features.momentumShort * this.weights.momentumShort
        score += features.momentumLong * this.weights.momentumLong
        score += features.trendStrength * this.weights.trendStrength
        score += features.volumeAnomaly * this.weights.volumeAnomaly
        score += features.spread * this.weights.spread
        score += features.liquidityImbalance * this.weights.liquidityImbalance

        return score

    }



    getSignal(score) {

        if (score > 0.5) return "LONG"

        if (score < -0.5) return "SHORT"

        return "NEUTRAL"

    }

}
