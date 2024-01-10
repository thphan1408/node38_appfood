import express from 'express'
import rootRoutes from './routes/rootRoutes.js'

const app = express()
const port = 8080

app.use(express.json())

app.use('/api', rootRoutes)

app.listen(port)
