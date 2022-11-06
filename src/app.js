const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");

const app = express();

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Successful authentication"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("Successful synchronization"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => res.status(200).json("Getting data"));

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
