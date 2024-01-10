import express from 'express'
import {
  getListLikeRes,
  getListRateRes,
} from '../controllers/restaurantController.js'

const restaurantRoutes = express.Router()

restaurantRoutes.get('/get-list-like-res/:RES_ID', getListLikeRes)
restaurantRoutes.get('/get-list-rate-res/:RES_ID', getListRateRes)

export default restaurantRoutes
