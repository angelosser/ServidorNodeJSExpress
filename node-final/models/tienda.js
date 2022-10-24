const { DataTypes } = require("sequelize");

const conexion = require('../database/config')

const Tienda = conexion.define('Tienda', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    horas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Tienda.prototype.toJSON = function(){
    const {horas, ...tienda} = Object.assign({}, this.get())
    return tienda
}

module.exports = Tienda