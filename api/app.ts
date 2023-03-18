import express from 'express'
import { createConnection } from './database/client'
import { router } from './routers/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../docs/swagger.json'
import cors from 'cors'

const app = express()

createConnection()

app.use(express.json())
app.use(cors())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export { app }
