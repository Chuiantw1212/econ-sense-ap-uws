import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'

const router = new HyperExpress.Router()
uWS.get('/meta/plan', async function (res, req) {
    try {
        const { GetPlanEntityService } = req.app.locals as ILocals
        const planForm = await GetPlanEntityService.getPlanEntity()
        res.json(planForm)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
uWS.get('/meta/select', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const countiesAndTownMap = await locals.GetTaiwanLocationService.getTaiwanLocations()
        const selectOptionsMap = await locals.GetOptionsService.getOptionsMap()
        const result = {
            ...countiesAndTownMap,
            ...selectOptionsMap,
        }
        res.json(result)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
export default router