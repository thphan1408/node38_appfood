import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize)

const userLike = async (req, res) => {
  try {
    let { USER_ID, RES_ID } = req.body

    let newData = {
      USER_ID,
      RES_ID,
      DATE_LIKE: new Date(),
    }
    // kiểm tra xem user đã like chưa
    let check = await conn.LIKE_RES.findOne({
      where: {
        USER_ID,
        RES_ID,
      },
    })
    if (check) {
      res.status(500).send(`You have liked this restaurant`)
    } else {
      await conn.LIKE_RES.create(newData)
      res.status(200).send('Like success')
    }
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

const userUnlike = async (req, res) => {
  try {
    let { USER_ID, RES_ID } = req.params

    // Nếu user chưa like thì không thể unlike
    let check = await conn.LIKE_RES.findOne({
      where: {
        USER_ID,
        RES_ID,
      },
    })

    if (!check) {
      res.status(500).send(`You haven't liked this restaurant`)
    } else {
      await conn.LIKE_RES.destroy({
        where: {
          USER_ID,
          RES_ID,
        },
      })
      res.status(200).send('Delete success')
    }
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

const getListLike = async (req, res) => {
  try {
    let { USER_ID } = req.params

    let data = await conn.LIKE_RES.findAll({
      where: {
        USER_ID,
      },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

const getListRate = async (req, res) => {
  try {
    let { USER_ID } = req.params

    let listRate = await conn.RATE_RES.findAll({
      where: {
        USER_ID,
      },
    })

    res.status(200).send(listRate)
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

const createOrder = async (req, res) => {
  try {
    let { USER_ID, FOOD_ID, AMOUNT, CODE, ARR_SUB_ID } = req.body
    let newData = {
      USER_ID,
      FOOD_ID,
      AMOUNT,
    }
    // Kiểm tra xem user đã order chưa: Nếu đã order rồi thì không thể order và ngược lại
    let check = await conn.ORDERS.findOne({
      where: {
        USER_ID,
        FOOD_ID,
      },
    })

    if (check) {
      res.status(500).send(`You have ordered this food`)
    } else {
      await conn.ORDERS.create(newData)
      res.status(200).send('Order success')
    }
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

const createRate = async (req, res) => {
  try {
    let { USER_ID, RES_ID, AMOUNT } = req.body

    // if (!USER_ID || !RES_ID) {
    //   res.status(404).send('User or restaurant not found')
    //   return
    // }

    let newData = {
      USER_ID,
      RES_ID,
      AMOUNT,
      DATE_RATE: new Date(),
    }

    let isCheck = await conn.RATE_RES.findOne({
      where: {
        USER_ID,
        RES_ID,
      },
    })

    if (isCheck) {
      res.status(500).send(`You have rated this restaurant`)
    } else {
      await conn.RATE_RES.create(newData)
      res.status(200).send('Rate success')
    }
  } catch (error) {
    res.status(500).send(`Backend error: ${error}`)
  }
}

export {
  userLike,
  userUnlike,
  getListLike,
  getListRate,
  createOrder,
  createRate,
}
