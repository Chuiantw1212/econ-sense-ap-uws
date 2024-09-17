import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'
const router = new HyperExpress.Router()
/**
 * Deprecated, 合併到meta
 */
uWS.get('/interface/plan', async function (res, req) {
    try {
        const { GetPlanEntityService } = req.app.locals as ILocals
        const planForm = await GetPlanEntityService.getPlanEntity()
        res.json(planForm)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
export default router