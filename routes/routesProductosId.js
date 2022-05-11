const {Router}= require('express')
const router = Router()
let contenedor = require('../contenedor')

    // * GET '/api/productos/:id' -> devuelve un producto segun su Id. 
router.get('/:id', (req, res)=>{
        const {id} = req.params
        let productoId = contenedor.find(
            (producto) => producto.id === id
          );
        if(productoId === undefined){
            return res.json({ error : 'producto no encontrado '})
        }  
        res.json({"producto buscado" : productoId})
    })
    // * DELETE '/api/productos/:id' -> elimina un productos segun su id. 
    router.delete('/:id', (req, res) =>{
        const {id}= req.params
        const productoEliminado = contenedor.splice(contenedor(Number(id)-1, 1 ))
        res.json({"Eliminada":productoEliminado })
    })    


module.exports = router