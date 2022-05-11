const {Router}= require('express')
// const res = require('express/lib/response')
const router = Router()
const contenedor = require('../contenedor')


    // * GET '/api/productos' ->devuelve todos los productos.
router.get('/', (req, res)=>{
        res.json({"productos" : contenedor})
    })
    // * POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado. 
router.post('/', (req, res)=>{
    const {producto} = req.body
    contenedor.save(producto)
    productoAgregado = contenedor.pop();    
    res.json({"producto" : `El producto es ${producto} y con el id ${productoAgregado.id}`})
}
)
module.exports = router