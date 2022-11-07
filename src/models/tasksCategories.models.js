const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const TasksCategories = db.define(
  "tasks_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: "tasks",
      },
      field: "task_id",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: "categories",
      },
      field: "category_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TasksCategories;
