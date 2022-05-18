class Contenedor {
  constructor() {
    this.productos = [];
  }
  save(objeto) {
    if (this.productos.length === 0) {
      objeto = {
        id : 1,
        title : objeto.title,
        price : objeto.price,
        thumbnail : objeto.thumbnail
      };
      this.productos.push(objeto);
      return objeto 
    } else {
      
      let idUltimo = this.productos.map((producto) => producto.id);
      let idAsignado = Math.max(...idUltimo);
      idAsignado++;
      objeto = {
        id: idAsignado,
        title: objeto.title,
        price: objeto.price,
        thumbnail: objeto.thumbnail,
      };
      this.productos.push(objeto);
      return objeto;
    }
  }
  getAll(){
    return this.productos;
  }
  getById(idBuscado) {
    let productoId = this.productos.find((producto) => producto.id === idBuscado);
    if (productoId === undefined) {
      return res.json({ error: "producto no encontrado" });
    }
    return res.json({ "Producto Id": productoId });
  }
}


module.exports = Contenedor;
