const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Address = db.define("address", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
    timestamps: false
});

module.exports = Address;
