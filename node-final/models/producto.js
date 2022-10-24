const { DataTypes } = require("sequelize");

const conexion = require('../database/config')

const Producto = conexion.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Producto.prototype.toJSON = function(){
    const {marca, ...producto} = Object.assign({}, this.get())
    return producto
}

module.exports = Producto