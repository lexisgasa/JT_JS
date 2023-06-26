"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// este metodo no permite añadir o borrar keys pero si permite modificar las ya existentes
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg" // da error


console.log(producto)

console.log(Object.isSealed(producto))