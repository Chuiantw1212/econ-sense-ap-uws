import uWS from 'uWebSockets.js'
import { memoryUsage } from 'node:process'
import { ILocals } from '../../entities/app'

export default function (App: ReturnType<typeof uWS.App>) {
    App.get('/', async (res, req) => {
        const memoryUsageInMB: ReturnType<typeof memoryUsage> = {
            rss: 0,
            heapTotal: 0,
            heapUsed: 0,
            arrayBuffers: 0,
            external: 0,
        }
        const currentMemoryUsage: any = memoryUsage()
        for (const key in memoryUsageInMB) {
            const mb: number = Math.floor(1024 * 1024)
            const value: number = currentMemoryUsage[key]
            const valueInMB: number = Math.floor(value / mb)
            Object.assign(memoryUsageInMB, {
                [key]: `${valueInMB.toLocaleString()}Mb`
            })
        }
        // const locals = req.app.locals as ILocals
        const serverStart = {
            memoryUsage: memoryUsageInMB,
            // startupTime: `${locals.startupTime}s`,
        }
        res.end(serverStart)
    })
}
