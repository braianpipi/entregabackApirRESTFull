class Contenedor {
  constructor() {
    let productos = [] ;
  }
  save(objeto) {
    let idUltimo =[]
    if(productos.length === 0){
      return idUltimo.push(1)
    }else{

      idUltimo = productos.map((producto) => producto.id);
      let idAsignado = Math.max(...idUltimo);
      idAsignado++;
      objeto = {
        id: idAsignado,
        title: objeto.title,
        price: objeto.price,
        thumbnail: objeto.thumbnail,
      };
    }
    productos.push(objeto);
    return objeto;
  }

  getById(idBuscado) {
    let productoId = contenedor.find(
      (producto) => producto.id === idBuscado
    );
    if(productoId === undefined){
       return res.json({error :'producto no encontrado'})
    }
    return res.json({"Producto Id": productoId})
    }


}
let contenedor = new Contenedor();
module.exports = contenedor;
