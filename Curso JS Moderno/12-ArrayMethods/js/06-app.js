const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];



// en el metodo .every todos los elementos del array deben cumplir la condicion para que devuelva true

console.log( carrito.every(item => item.precio < 1000) ) // si el precio de ningun objeto llega a 1000, devuelve true

console.log( carrito.every(item => item.precio > 400) ) // si todos cuestan mas de 400, true, en este caso hay de 100 200 y 300 asi que false