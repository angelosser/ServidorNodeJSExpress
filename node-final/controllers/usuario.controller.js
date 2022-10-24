const Usuario = require("../models/usuario")
const bcryptjs = require('bcryptjs')

const getUsuarios = async(req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            where:{
                estado: true
            }
        })
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const getUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(404).json({
                mensaje: `No existe el usuario con id ${id}`
            })
    } else res.json(usuario)
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const postUsuario = async (req, res) => {
    try{
        const body = req.body
        const usuario = new Usuario(body)

        const salt = bcryptjs.genSaltSync()
        usuario.clave = bcryptjs.hashSync(body.clave, salt)

        await usuario.save()
        res.json(usuario)
    } catch(error){
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const putUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(404).json({
                mensaje: `No existe usuario ${id}`
            })
        } else {
            await usuario.update(body)
            res.json(usuario)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            res.status(404).json({
                mensaje: `No existe usuario ${id}`
            })
        } else {
            await usuario.update({
                estado: false
            })
            res.json(usuario)
        }
    } catch (error) {
        res.status(500).json({
            Error: 'Contacte al administrador del sistema'
        })
        console.log(error)
        //throw new Error(error)
    }
}

module.exports = {
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
}