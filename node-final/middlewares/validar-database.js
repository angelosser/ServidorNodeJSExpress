const Producto = require('../models/producto')
const Usuario = require('../models/usuario')
const Tienda = require('../models/tienda')

const nombreProdValido = async (nombreProd = '') => {
    const nonmbreProdExiste = await Producto.findOne({
        where:{
            nombre:nombreProd
        }
    })
    if(nonmbreProdExiste){
        throw new Error(`El nombre de producto ${nombreProd} ya existe`)
    }
}

const correoValido = async (correo = '') => {
    const correoExiste = await Usuario.findOne({
        where:{
            correo
        }
    })
    if(correoExiste){
        throw new Error(`El correo: ${correo} ya existe!`)
    }
}

const nombreTiendaValido = async (nombreTienda = '') => {
    const nonmbreTiendaExiste = await Tienda.findOne({
        where:{
            nombre: nombreTienda
        }
    })
    if (nonmbreTiendaExiste) {
        throw new Error(`La tienda con nombre ${nombreTienda} ya existe`)
    }
}

const direccioValido = async(direccion = '') => {
    const direccionExiste = await Tienda.findOne({
        where:{
            direccion
        }
    })
    if (direccionExiste) {
        throw new Error(`La direccion ${direccion} ya esta siendo utilizada`)
    }
}

module.exports = {
    nombreProdValido,
    correoValido,
    nombreTiendaValido,
    direccioValido
}