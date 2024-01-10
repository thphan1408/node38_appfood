import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class RESTAURANT extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    RES_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RES_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IMAGE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DECS: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RESTAURANT',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RES_ID" },
        ]
      },
    ]
  });
  }
}
