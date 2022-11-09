const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const usersRouter = require("./routes/users.routes");
require("dotenv").config();
const logs = require("./middlewares/requestLogs");
const morgan = require("morgan");

// Inicializaciones / Estancias
const app = express();
app.use(express.json());
initModels();
app.use(logs);
app.use(morgan("tiny"));

// Settings
const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log("Successful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Successful synchronization"))
  .catch((error) => console.log(error));

// Periciones
app.get(
  "/",
  (req, res, next) => {
    console.log("Antes de hacer la peticion");
    next();
  },
  (req, res, next) => {
    res.status(200).json("Getting data");
    next();
  },
  (req, res, next) => {
    console.log("despues de hacer la peticion");
  }
);

// Middlewares
app.use("/api/v1", usersRouter);
app.use((error, req, res, next) => {
  res.status(400).json({
    message: "ups something is wrong",
    error: error.message
  });
});

// Iniciar server
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
