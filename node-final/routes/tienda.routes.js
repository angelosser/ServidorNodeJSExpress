const { Router } = require('express')

const {
    getTiendas,
    getTienda,
    postTienda,
    putTienda,
    deleteTienda
} = require('../controllers/tienda.controller')

const { check } = require('express-validator')
const validarAtributos = require('../middlewares/validar-atributos')
const { nombreTiendaValido, direccioValido } = require('../middlewares/validar-database')

const router = new Router()

router.get('/', getTiendas)
router.get('/:id', getTienda)
router.post('/', [
    check('nombre', 'El nombre de la tienda es obligatorio').notEmpty(),
    check('direccion', 'Es obligatorio colocar una direccion para la tienda').notEmpty(),
    check('horas', 'Establece la cantidad de horas que la tienda estara disponible').notEmpty(),
    check('nombre').custom(nombreTiendaValido),
    check('direccion').custom(direccioValido),
    validarAtributos
], postTienda)
router.put('/:id', putTienda)
router.delete('/:id', deleteTienda)

module.exports = router