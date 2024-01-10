import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class FOOD_TYPE extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    TYPE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FOOD_TYPE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TYPE_ID" },
        ]
      },
    ]
  });
  }
}
