import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class FOOD extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    FOOD_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FOOD_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IMAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PRICE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'FOOD_TYPE',
        key: 'TYPE_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'FOOD',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FOOD_ID" },
        ]
      },
      {
        name: "TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "TYPE_ID" },
        ]
      },
    ]
  });
  }
}
