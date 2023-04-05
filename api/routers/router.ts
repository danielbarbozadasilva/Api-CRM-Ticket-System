import { Router } from 'express'
import routersV1Auth from './v1/routers.auth'
import routersV1Call from './v1/routers.call'
import routersV1Client from './v1/routers.client'

const router = Router()
routersV1Auth(router)
routersV1Call(router)
routersV1Client(router)

export { router }
