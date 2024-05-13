import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { PositionRouter } from './modules/Positions/PositionRouter'
import { errorHandler } from './utils/errorHandler'
import swaggerDocs from './utils/swagger'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => {
  res.send('Express Server')
})

swaggerDocs(app)

app.use('/api/positions', PositionRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})