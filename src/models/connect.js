import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('NODE38_FOODS', 'root', '1234', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
})

export default sequelize
