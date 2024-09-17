import uWS from 'uWebSockets.js'
import { ILocals } from '../../entities/app'

const router = new HyperExpress.Router()
uWS.post('/chat/story', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const input = await req.text()
        const output = await locals.GetNewStoryService.makeStory(input)
        res.send(output)
    } catch (error: any) {
        console.log(error.message || error)
        res.send(error.message || error)
    }
})
uWS.post('/chat/translate', async function (res, req) {
    try {
        const locals = req.app.locals as ILocals
        const input = await req.json()
        const output = await locals.GetTranslationService.translate(input)
        res.json(output)
    } catch (error: any) {
        console.log(error.message || error)
        res.send(error.message || error)
    }
})
export default router