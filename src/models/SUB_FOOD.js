import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SUB_FOOD extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    SUB_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SUB_NAME: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SUB_PRICE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FOOD_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'FOOD',
        key: 'FOOD_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'SUB_FOOD',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SUB_ID" },
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
