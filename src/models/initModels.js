const Address = require("./addresses.models");
const Tasks = require("./tasks.models");
const Users = require("./users.models");
const Categories = require("./categories.models");
const TasksCategories = require("./tasksCategories.models");

const initModels = () => {
  Users.hasOne(Address, { as: "resident", foreignKey: "user_id" });
  Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" });

  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  Tasks.hasMany(TasksCategories, { as: "categories", foreignKey: "task_id" });
  TasksCategories.belongsTo(Tasks, { as: "todo", foreignKey: "task_id" });

  Categories.hasMany(TasksCategories, {
    as: "tasks",
    foreignKey: "category_id",
  });
  TasksCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
