const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];


// el metodo reduce es una funcion reducer, coge una gran cantidad de datos y devuelve un unico resultado

// con un foreach normal hay que declarar la cantidad total
let total = 0;

carrito.forEach(item => total += item.precio)

console.log(total)



// se hace mas rapido con el reduce
// el primer parametro es el la variable con el resultado previo, el producto es el cada una de las iteraciones, el 0 final es la cantidad con la que empieza
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 )

console.log(resultado)
