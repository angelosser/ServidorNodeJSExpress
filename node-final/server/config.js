const express = require("express")
const conexion = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productoPath = '/producto'
        this.usuarioPath = '/usuario'
        this.tiendaPath = '/tienda'
        this.conexionBD()
        this.app.use(express.json())
        this.routes()
    }

    async conexionBD(){
        try {
            await conexion.authenticate()
            console.log('Conexion establecida correctamente.')
        } catch (error) {
            throw new Error(error)
        }
    }

    routes(){
        this.app.use(this.productoPath, require('../routes/producto.routes'))
        this.app.use(this.usuarioPath, require('../routes/usuario.routes'))
        this.app.use(this.tiendaPath, require('../routes/tienda.routes'))
    }
s
    listen(){
        this.app.listen(this.port, () => console.log(`Llamado en el puerto https:/localhost:${this.port}`))
    }

}

module.exports = Server