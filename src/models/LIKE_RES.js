import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class LIKE_RES extends Model {
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
    DATE_LIKE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    LIKE_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'LIKE_RES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LIKE_ID" },
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
