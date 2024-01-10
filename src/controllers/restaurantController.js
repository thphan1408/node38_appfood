import sequelize from '../models/connect.js'
import initModels from '../models/init-models.js'

const conn = initModels(sequelize)

const getListLikeRes = async (req, res) => {
  try {
    let { RES_ID } = req.params
    let data = await conn.LIKE_RES.findAll({
      where: { RES_ID },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getListRateRes = async (req, res) => {
  try {
    let { RES_ID } = req.params
    let data = await conn.RATE_RES.findAll({
      where: { RES_ID },
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getListRateRes, getListLikeRes }
