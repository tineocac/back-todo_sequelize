const db = require("../utils/database");

const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");

const users = [
  { username: "Carlos", email: "carlos@gmail.com", password: "1234" },
  { username: "Pedro", email: "pedro@gmail.com", password: "1234" },
  { username: "Alejandro", email: "alejandro@gmail.com", password: "1234" },
];

const address = [
  { street: "Calle 1", number: 5, userId: 1 },
  { street: "Calle 2", number: 3, userId: 2 },
  { street: "Calle 3", number: 10, userId: 3 },
];

const tasks = [
  { title: "New task 1", description: "Hacer la cena", userId: 1 },
  { title: "New task 2", description: "Hacer la cena", userId: 2 },
  { title: "New task 3", description: "Hacer la cena", userId: 3 },
];

const categories = [{ name: "Hogar" }, { name: "Tecno" }, { name: "Trabajo" }];

db.sync()
  .then(() => {
    console.log("Creating users");
    users.forEach((user) => Users.create(user));
  })
  .then(() => {
    console.log("Creating addreses");
    address.forEach((addres) => Address.create(addres));
  })
  .then(() => {
    console.log("Creating tasks");
    tasks.forEach((task) => Tasks.create(task));
  })
  .then(() => {
    console.log("Creating categories");
    categories.forEach((category) => Categories.create(category));
  });
