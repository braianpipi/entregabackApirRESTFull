const express = require('express')
const app = express()
const morgan = require('morgan')
const routesProductos = require('./routes/routesProductos')
const routesProductosId = require('./routes/routesProductosId')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use('/api/productos', routesProductos)
app.use('/api/productos', routesProductosId)


const PORT = 8080;

const server = app.listen(PORT, ()=>{
    let mensaje = `Servidor escuchando en el puerto ${PORT}`
    return mensaje
})

console.log(server)