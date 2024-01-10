import express from 'express'
import userRoutes from './userRoutes.js'
import restaurantRoutes from './restaurantRoutes.js'

const rootRoutes = express.Router()

// Các routes con của rootRoutes
rootRoutes.use('/user', userRoutes)
rootRoutes.use('/res', restaurantRoutes)

export default rootRoutes
