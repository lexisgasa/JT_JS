"use strict";

const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};


const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto)
console.log(medidas)

// para unir objetos se puede usar mediante el metodo assign()

const productoFinal = Object.assign(producto, medidas);
console.log(productoFinal)

// otra manera de hacerlo es con el spread operator - rest operator, el cual copia el objeto despues de usarse (...), tambien sirve para arrays pero debe utilizarse [] para indicar que es un array

const productoFinal2 = { ...producto, ...medidas}
console.log(productoFinal2)