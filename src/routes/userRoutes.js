import express from 'express'
import {
  createOrder,
  createRate,
  getListLike,
  getListRate,
  userLike,
  userUnlike,
} from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.post('/user-like', userLike)
userRoutes.delete('/user-unlike/:USER_ID/:RES_ID', userUnlike)
userRoutes.get('/get-list-like/:USER_ID', getListLike)
userRoutes.get('/get-list-rate/:USER_ID', getListRate)
userRoutes.post('/create-order', createOrder)
userRoutes.post('/create-rate', createRate)

export default userRoutes
