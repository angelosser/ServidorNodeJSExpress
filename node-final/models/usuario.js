const { DataTypes } = require("sequelize");

const conexion = require('../database/config')

const Usuario = conexion.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Usuario.prototype.toJSON = function(){
    const {clave, ...usuario} = Object.assign({}, this.get())
    return usuario
}

module.exports = Usuario