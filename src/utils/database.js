const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME || "todo_sequelize",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || "root",
  dialect: "postgres",
});

module.exports = db;
