const { Sequelize } = require("sequelize");

const conexion = new Sequelize('final', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conexion