const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const Tasks = require("../models/tasks.models");
const TasksCategories = require("../models/tasksCategories.models");
const users = require("../models/users.models");

class usersServices {
  static async getAll() {
    try {
      const result = await users.findAll({
        attributes: ["id", "username", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const result = await users.findByPk(id, {
        attributes: ["id", "username", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinAddres(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: ["id", "username", "email"],
        include: {
          model: Address,
          attributes: {
            exclude: ["userId", "userd_id"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinTask(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: ["id", "username", "email"],
        include: {
          model: Tasks,
          attributes: ["title", "description", "isComplete"],
          include: {
            model: TasksCategories,
            attributes: ["category_id"],
            include: {
              model: Categories,
              attributes: ["name"],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async add(newUser) {
    try {
      const result = await users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = usersServices;
