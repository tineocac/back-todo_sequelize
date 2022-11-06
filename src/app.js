const express = require("express");
const db = require("./utils/database");

const app = express();

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Successful authentication"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Successful synchronization"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.status(200).json("Getting data"));

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
