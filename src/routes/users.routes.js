const { Router } = require("express");
const router = Router();

const {
  getAllusers,
  getUsersById,
  getUsersWithAddress,
  getUsersWithTasks,
} = require("../controllers/users.controllers");

router.get("/users", getAllusers);
router.get("/users/:id", getUsersById);
router.get("/users/:id/address", getUsersWithAddress);
router.get("/users/:id/tasks", getUsersWithTasks);

module.exports = router;
