const { Router } = require('express')

const {
    getProductos,
    getProducto,
    postProucto,
    putProducto,
    deleteProducto
} = require('../controllers/producto.controller')

const { check } = require('express-validator')
const validarAtributos = require('../middlewares/validar-atributos')
const { nombreProdValido } = require('../middlewares/validar-database')

const router = new Router()

router.get('/', getProductos)
router.get('/:id', getProducto)
router.post('/', [
    check('nombre', 'El nombre del producto es obligatorio').notEmpty(),
    check('marca', 'Es obligatorio colocar una marca para el producto').notEmpty(),
    check('categoria', 'Coloca una categoria para el producto').notEmpty(),
    check('nombre').custom(nombreProdValido),
    validarAtributos
], postProucto)
router.put('/:id', putProducto)
router.delete('/:id', deleteProducto)

module.exports = router