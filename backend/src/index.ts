import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { errorHandler } from './utils/errorHandler'
import swaggerDocs from './utils/swagger'
import { corsOptions } from './config/cors'

import { PositionRouter } from './modules/Positions/PositionRouter'
import { CandidateRouter } from './modules/Candidates/CandidateRouter'
import syncDatabase from './utils/syncDatabase'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response) => {
  res.send('Express Server')
})

syncDatabase()
swaggerDocs(app)

app.use('/api/positions', PositionRouter)
app.use('/api/candidates', CandidateRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
