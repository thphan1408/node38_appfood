import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class RATE_RES extends Model {
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
    RES_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'RESTAURANT',
        key: 'RES_ID'
      }
    },
    AMOUNT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE_RATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RATE_RES_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'RATE_RES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RATE_RES_ID" },
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
        name: "RES_ID",
        using: "BTREE",
        fields: [
          { name: "RES_ID" },
        ]
      },
    ]
  });
  }
}
