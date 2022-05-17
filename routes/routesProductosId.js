const {Router}= require('express')
const router = Router()
let contenedor = require('../contenedor')

    // * GET '/api/productos/:id' -> devuelve un producto segun su Id. 
router.get('/productos/:id', (req, res)=>{
    
    const {idBuscado} = req.params;
    getById(idBuscado)})
    // * DELETE '/api/productos/:id' -> elimina un productos segun su id. 
    router.delete('/productos/:id', (req, res) =>{
        const {id}= req.params
        const productoEliminado = contenedor.splice(contenedor(Number(id)-1, 1 ))
        res.json({"Eliminada":productoEliminado })
    })    


module.exports = router