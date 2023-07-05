const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un foreach
let resultado = "";
carrito.forEach( (item, index) => {
    if(item.nombre === "Tablet") {
        resultado = carrito[index]
    }
});

console.log(resultado);

// con filter mucho más reducido, .find solo va a devolver el primer valor que cumpla la condicion

console.log( carrito.find(item => item.nombre === "Televisión") )