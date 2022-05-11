class Contenedor {
  constructor() {
    const productos = [];
  }
  save(objeto) {
    let idUltimo = productos.map((producto) => producto.id);
    let idAsignado = Math.max(...idUltimo);
    idAsignado++;
    objeto = {
      id: idAsignado,
      title: objeto.title,
      price: objeto.price,
      thumbnail: objeto.thumbnail,
    };
    informacion.push(objeto);
  }
}
let contenedor = new Contenedor();
module.exports = contenedor;
