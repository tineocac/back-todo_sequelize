const Address = require("./addresses.models");
const Tasks = require("./tasks.models");
const Users = require("./users.models");
const Categories = require("./categories.models");

const initModels = () => {
  Users.hasOne(Address, { as: "resident", foreignKey: "user_id" });
  Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" });

  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
  Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  Tasks.belongsToMany(Categories, {
    through: "tasks_categories",
  });

  Categories.belongsToMany(Tasks, {
    through: "tasks_categories",
  });
};

module.exports = initModels;
