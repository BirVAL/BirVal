// risk/risk_engine.js

export function evaluateRisk(trade) {

    const entry = trade.entry
    const stop = trade.stop
    const capital = trade.capital
    const riskPercent = trade.riskPercent || 0.01


    const riskPerUnit = Math.abs(entry - stop)


    const capitalRisk = capital * riskPercent


    const positionSize = capitalRisk / riskPerUnit


    const reward = trade.target
        ? Math.abs(trade.target - entry)
        : riskPerUnit * 2


    const rewardRiskRatio = reward / riskPerUnit


    return {

        positionSize,

        capitalRisk,

        riskPerUnit,

        rewardRiskRatio

    }

}
