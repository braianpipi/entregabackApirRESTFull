const {Router}= require('express')
// const res = require('express/lib/response')
const router = Router()
const contenedor = require('../contenedor')


    // * GET '/api/productos' ->devuelve todos los productos.
router.get('/productos', (req, res)=>{
        res.json({"productos" : contenedor})
    })
    // * POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado. 
router.post('/productos', (req, res)=>{
    const {producto} = req.body
    let objeto =contenedor.save(producto)  

    res.json({"producto" : `El producto es ${objeto.title} y con el id ${objeto.id}`})
}
)
module.exports = router