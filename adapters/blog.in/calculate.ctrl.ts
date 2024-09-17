import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'

const router = new HyperExpress.Router()

uWS.post('/finance/lifeExpectancy', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const body = await req.json()
        const lifeExpectancy = await locals.GetLifeExpectancyService.getLifeExpectancy(body)
        res.json(lifeExpectancy)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
uWS.post('/finance/unitPrice', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const body = await req.json()
        const result = await locals.GetEstateUnitPriceService.getEstateUnitPrice(body)
        res.json(result)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
// deprecated
uWS.post('/calculate/lifeExpectancy', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const body = await req.json()
        const lifeExpectancy = await locals.GetLifeExpectancyService.getLifeExpectancy(body)
        res.json(lifeExpectancy)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
// deprecated
uWS.post('/calculate/unitPrice', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const body = await req.json()
        const result = await locals.GetEstateUnitPriceService.getEstateUnitPrice(body)
        res.json(result)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
export default router