const { Router } = require("express");
const router = Router();

const {
  getAllusers,
  getUsersById,
  getUsersWithAddress,
  getUsersWithTasks,
  addUser,
} = require("../controllers/users.controllers");

router.get("/users", getAllusers);
router.get("/users/:id", getUsersById);
router.get("/users/:id/address", getUsersWithAddress);
router.get("/users/:id/tasks", getUsersWithTasks);
router.post("/users", addUser);

module.exports = router;
