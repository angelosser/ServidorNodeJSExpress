const Tienda = require("../models/tienda")

const getTiendas = async(req, res) => {
    try {
        const tiendas = await Tienda.findAll({
            where:{
                estado: true
            }
        })
        res.json(tiendas)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const getTienda = async (req, res) => {
    try {
        const id = req.params.id
        const tienda = await Tienda.findByPk(id)
        if(!tienda){
            res.status(404).json({
                mensaje: `No existe la tienda con id ${id}`
            })
    } else res.json(tienda)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const postTienda = async (req, res) => {
    try{
        const body = req.body
        const tienda = new Tienda(body)
        await tienda.save()
        res.json(tienda)
    } catch(error){
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const putTienda = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const tienda = await Tienda.findByPk(id)
        if(!tienda){
            res.status(404).json({
                mensaje: `No existe tienda ${id}`
            })
        } else {
            await tienda.update(body)
            res.json(tienda)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const deleteTienda = async (req, res) => {
    try {
        const id = req.params.id
        const tienda = await Tienda.findByPk(id)
        if(!tienda){
            res.status(404).json({
                mensaje: `No existe tienda ${id}`
            })
        } else {
            await tienda.update({
                estado: false
            })
            res.json(tienda)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

module.exports = {
    getTiendas,
    getTienda,
    postTienda,
    putTienda,
    deleteTienda
}