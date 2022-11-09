const usersServices = require("../services/users.services");

const getAllusers = async (req, res, next) => {
  try {
    const result = await usersServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsersById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsersWithAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserJoinAddres(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsersWithTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await usersServices.getUserJoinTask(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await usersServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllusers,
  getUsersById,
  getUsersWithAddress,
  getUsersWithTasks,
  addUser,
};
