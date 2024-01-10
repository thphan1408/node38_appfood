import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ORDERS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'USERS',
        key: 'USER_ID'
      }
    },
    FOOD_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'FOOD',
        key: 'FOOD_ID'
      }
    },
    AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ARR_SUB_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ORDERS_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ORDERS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORDERS_ID" },
        ]
      },
      {
        name: "USER_ID",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "FOOD_ID",
        using: "BTREE",
        fields: [
          { name: "FOOD_ID" },
        ]
      },
    ]
  });
  }
}
