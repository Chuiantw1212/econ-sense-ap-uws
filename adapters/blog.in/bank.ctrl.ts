import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'

export default function (App: ReturnType<typeof uWS.App>) {
    App.get('/bank/config/interestRate', async function (res, req) {
        try {
            const locals = req.app.locals as ILocals
            const interestRate: number = await locals.GetBackedInterestRateService.getBackedInterestRate()
            res.json(interestRate)
        } catch (error: any) {
            console.trace(error.message || error)
            res.send(error.message || error)
        }
    })
    App.get('/bank/config/portfolioIrr', async function (res, req) {
        try {
            const locals = req.app.locals as ILocals
            const portfolioIRR = await locals.GetPortfolioIRRService.getPortfolioIRR()
            res.json(portfolioIRR)
        } catch (error: any) {
            console.trace(error.message || error)
            res.send(error.message || error)
        }
    })
    return App
}



// export default router