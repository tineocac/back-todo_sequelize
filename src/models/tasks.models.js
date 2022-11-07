const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Tasks = db.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "id",
      model: "users",
    },
    field: "user_id",
  },
});

module.exports = Tasks;
