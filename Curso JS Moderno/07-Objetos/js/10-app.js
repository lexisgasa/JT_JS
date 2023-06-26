"use strict";

// ? el siguiente codigo va a dar error porque cuando se llama mostrarInfo, busca una variable llamda nombre y otra precio en el scope en el que se encuentra, el global
/* const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    // 
    console.log(`El producto: ${nombre} tiene un precio de: ${precio}`)
  }
};
*/

// ? Si añadimos estas dos variables, dara la informacion conforme estas dos variables
// let nombre = "Raton vertical"
// let precio = 49€

// producto.mostrarInfo();


// utilizando this cogemos el scope en el que pertenece la funcion
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
  }
};

producto.mostrarInfo();