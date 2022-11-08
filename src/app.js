const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const usersRouter = require("./routes/users.routes");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

initModels();

db.authenticate()
  .then(() => console.log("Successful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Successful synchronization"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).json("Getting data"));

app.use("/api/v1", usersRouter);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
