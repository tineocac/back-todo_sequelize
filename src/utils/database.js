const {Sequelize} = require('sequelize')

const db = new Sequelize({
    database: "todo_sequelize",
    host: "localhost",
    username: "postgres",
    port: "5432",
    password: "root",
    dialect: "postgres"
})

module.exports = db