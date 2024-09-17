import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'
const router = new HyperExpress.Router()
/**
 * Deprecated, 合併到meta
 */
uWS.get('/select', async function (res, req) {
    try {
        const { GetTaiwanLocationService, GetOptionsService } = req.app.locals as ILocals
        const countiesAndTownMap = await GetTaiwanLocationService.getTaiwanLocations()
        const selectOptionsMap = await GetOptionsService.getOptionsMap()
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