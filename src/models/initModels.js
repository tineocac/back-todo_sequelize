const Address = require("./addresses.models");
const Tasks = require("./tasks.models");
const Users = require("./users.models");
const Categories = require("./categories.models");
const TasksCategories = require("./tasksCategories.models");

const initModels = () => {
  Users.hasOne(Address, { foreignKey: "user_id" });
  Address.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasMany(Tasks, { foreignKey: "user_id" });
  Tasks.belongsTo(Users, { foreignKey: "user_id" });

  Tasks.hasMany(TasksCategories, { foreignKey: "task_id" });
  TasksCategories.belongsTo(Tasks, { foreignKey: "task_id" });

  Categories.hasMany(TasksCategories, {
    foreignKey: "category_id",
  });
  TasksCategories.belongsTo(Categories, {
    foreignKey: "category_id",
  });
};

module.exports = initModels;
