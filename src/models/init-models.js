import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _FOOD from  "./FOOD.js";
import _FOOD_TYPE from  "./FOOD_TYPE.js";
import _LIKE_RES from  "./LIKE_RES.js";
import _ORDERS from  "./ORDERS.js";
import _RATE_RES from  "./RATE_RES.js";
import _RESTAURANT from  "./RESTAURANT.js";
import _SUB_FOOD from  "./SUB_FOOD.js";
import _USERS from  "./USERS.js";

export default function initModels(sequelize) {
  const FOOD = _FOOD.init(sequelize, DataTypes);
  const FOOD_TYPE = _FOOD_TYPE.init(sequelize, DataTypes);
  const LIKE_RES = _LIKE_RES.init(sequelize, DataTypes);
  const ORDERS = _ORDERS.init(sequelize, DataTypes);
  const RATE_RES = _RATE_RES.init(sequelize, DataTypes);
  const RESTAURANT = _RESTAURANT.init(sequelize, DataTypes);
  const SUB_FOOD = _SUB_FOOD.init(sequelize, DataTypes);
  const USERS = _USERS.init(sequelize, DataTypes);

  ORDERS.belongsTo(FOOD, { as: "FOOD", foreignKey: "FOOD_ID"});
  FOOD.hasMany(ORDERS, { as: "ORDERs", foreignKey: "FOOD_ID"});
  SUB_FOOD.belongsTo(FOOD, { as: "FOOD", foreignKey: "FOOD_ID"});
  FOOD.hasMany(SUB_FOOD, { as: "SUB_FOODs", foreignKey: "FOOD_ID"});
  FOOD.belongsTo(FOOD_TYPE, { as: "TYPE", foreignKey: "TYPE_ID"});
  FOOD_TYPE.hasMany(FOOD, { as: "FOODs", foreignKey: "TYPE_ID"});
  LIKE_RES.belongsTo(RESTAURANT, { as: "RE", foreignKey: "RES_ID"});
  RESTAURANT.hasMany(LIKE_RES, { as: "LIKE_REs", foreignKey: "RES_ID"});
  RATE_RES.belongsTo(RESTAURANT, { as: "RE", foreignKey: "RES_ID"});
  RESTAURANT.hasMany(RATE_RES, { as: "RATE_REs", foreignKey: "RES_ID"});
  LIKE_RES.belongsTo(USERS, { as: "USER", foreignKey: "USER_ID"});
  USERS.hasMany(LIKE_RES, { as: "LIKE_REs", foreignKey: "USER_ID"});
  ORDERS.belongsTo(USERS, { as: "USER", foreignKey: "USER_ID"});
  USERS.hasMany(ORDERS, { as: "ORDERs", foreignKey: "USER_ID"});
  RATE_RES.belongsTo(USERS, { as: "USER", foreignKey: "USER_ID"});
  USERS.hasMany(RATE_RES, { as: "RATE_REs", foreignKey: "USER_ID"});

  return {
    FOOD,
    FOOD_TYPE,
    LIKE_RES,
    ORDERS,
    RATE_RES,
    RESTAURANT,
    SUB_FOOD,
    USERS,
  };
}
