const Producto = require("../models/producto")

const getProductos = async(req, res) => {
    try {
        const productos = await Producto.findAll({
            where:{
                estado: true
            }
        })
        res.json(productos)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const getProducto = async (req, res) => {
    try {
        const id = req.params.id
        const producto = await Producto.findByPk(id)
        if(!producto){
            res.status(404).json({
                mensaje: `No existe el producto con id ${id}`
            })
    } else res.json(producto)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const postProucto = async (req, res) => {
    try{
        const body = req.body
        const producto = new Producto(body)
        await producto.save()
        res.json(producto)
    } catch(error){
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const putProducto = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const producto = await Producto.findByPk(id)
        if(!producto){
            res.status(404).json({
                mensaje: `No existe producto ${id}`
            })
        } else {
            await producto.update(body)
            res.json(producto)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const deleteProducto = async (req, res) => {
    try {
        const id = req.params.id
        const producto = await Producto.findByPk(id)
        if(!producto){
            res.status(404).json({
                mensaje: `No existe producto ${id}`
            })
        } else {
            await producto.update({
                estado: false
            })
            res.json(producto)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

module.exports = {
    getProductos,
    getProducto,
    postProucto,
    putProducto,
    deleteProducto
}