"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// para añadir nuevas propiedades o editarlas simplemente hay que asignarlas
producto.imagen = "imagen.jpg"
producto.disponible = false

console.log(producto)

Object.freeze(producto)

delete producto.imagen // ahora dara error
producto.disponible = true // tambien dara error