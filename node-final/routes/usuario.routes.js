const { Router } = require("express")

const {
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario,
    deleteUsuario
} = require('../controllers/usuario.controller')

const { check } = require('express-validator')
const validarAtributos = require("../middlewares/validar-atributos")
const { correoValido } = require("../middlewares/validar-database")

const router = new Router()

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('correo', 'Debe ser un correo valido').isEmail(),
    check('clave', 'La clave debe contener al menos 2 caracteres').isLength({min: 2}),
    check('clave', 'Es obligatorio colocar una clave').notEmpty(),
    check('sexo', 'No seas timid@, pon tu sexo').notEmpty(),
    check('correo').custom(correoValido),
    validarAtributos
], postUsuario)
router.put('/:id', putUsuario)
router.delete('/:id', deleteUsuario)

module.exports = router