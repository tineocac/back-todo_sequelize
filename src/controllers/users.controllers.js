const usersServices = require("../services/users.services");

const getAllusers = async (req, res) => {
  try {
    const result = await usersServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUsersWithAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserJoinAddres(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUsersWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserJoinTask(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllusers,
  getUsersById,
  getUsersWithAddress,
  getUsersWithTasks,
};
