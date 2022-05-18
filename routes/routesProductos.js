const Contenedor = require("../contenedor");
const { Router } = require("express");
const router = Router();

let contenedor = new Contenedor();

// * GET '/api/productos' ->devuelve todos los productos.
router.get("/", (req, res) => {
    let productos = contenedor.getAll();
    res.json({ productos: productos });
});

// * POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post("/", (req, res) => {
  const  producto  = req.body;
  let objeto = contenedor.save(producto);
  res.json({
    producto: `El producto es ${objeto.title} y con el id ${objeto.id}`,
  });
});

// * GET '/api/productos/:id' -> devuelve un producto segun su Id.
router.get("/productos/:id", (req, res) => {
  const { idBuscado } = req.params;
  getById(Number(idBuscado));
});
// * DELETE '/api/productos/:id' -> elimina un productos segun su id.
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  const productoEliminado = contenedor.splice(contenedor(Number(id) - 1, 1));
  res.json({ Eliminada: productoEliminado });
});

module.exports = router;
