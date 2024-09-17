import uWS from 'uWebSockets.js'
// import firebase from '../firebase.out'
import type { IPlan } from '../../entities/plan'
import { ILocals } from '../../entities/app'
const router = new HyperExpress.Router()

/**
 * 這邊示範Middleware用法
 * https://github.com/kartikk221/hyper-express/blob/master/docs/Middlewares.md
 */
uWS.use('/plan', async (res, req, next) => {
    try {
        const { VerifyIdTokenService } = req.app.locals as ILocals
        const idToken = req.headers.authorization || ''
        const user = await VerifyIdTokenService.verifyIdToken(idToken)

        /**
         * req.locals。非Node.js/HyperExpress/Express官方的用法，而是撰寫Node.js約定俗成的做法。
         * https://stackoverflow.com/questions/33451053/req-locals-vs-res-locals-vs-res-data-vs-req-data-vs-app-locals-in-express-mi
         */
        req.locals.user = user
        next()
    } catch (error: any) {
        console.log(error.message || error)
        next(error)
    }
});

uWS.put('/plan/profile', async function (res, req) {
    try {
        const { PutProfileService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutProfileService.mergeProfile(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/career', async function (res, req) {
    try {
        const { PutCareerService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutCareerService.mergeCareer(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/retirement', async function (res, req) {
    try {
        const { PutRetirementService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutRetirementService.mergeRetirement(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/estatePrice', async function (res, req) {
    try {
        const { PutEstatePriceService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutEstatePriceService.mergeEstatePrice(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/estateSize', async function (res, req) {
    try {
        const { PutEstateSizeService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutEstateSizeService.mergeEstateSize(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/estate', async function (res, req) {
    try {
        const { PutMortgageService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutMortgageService.mergeMortgage(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/spouse', async function (res, req) {
    try {
        const { PutSpouseService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutSpouseService.mergeSpouse(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/parenting', async function (res, req) {
    try {
        const { PutParentingService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutParentingService.mergeParenting(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.put('/plan/security', async function (res, req) {
    try {
        const { PutSecurityService } = req.app.locals as ILocals
        const userPart = await req.json()
        await PutSecurityService.mergeSecurity(req.locals.user.uid, userPart)
        res.send()
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.post('/plan/new', async function (res, req) {
    try {
        const { GetPlanEntityService, PostNewPlanService, GetBackedInterestRateService } = req.app.locals as ILocals
        const planEntity = GetPlanEntityService.getPlanEntity()
        const planForm: IPlan = await PostNewPlanService.addNewPlan(req.locals.user.uid, planEntity)
        const interestRate = await GetBackedInterestRateService.getBackedInterestRate()
        if (planForm.estate) {
            planForm.estate.interestRate = interestRate
        }
        res.json(planForm)
    } catch (error: any) {
        res.send(error.message || error)
    }
})

uWS.get('/plan', async function (res, req) {
    try {
        const { GetUserPlanService } = req.app.locals as ILocals
        const planForm = await GetUserPlanService.getPlan(req.locals.user.uid)
        res.json(planForm)
    } catch (error: any) {
        res.send(error.message || error)
    }
})
export default router