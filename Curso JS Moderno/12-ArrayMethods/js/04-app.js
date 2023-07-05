const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];


// el metodo filter es muy util ya que devuelve true en base a la condicion que se establece, y crea un array con los elementos que pasan dicha condicion

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 )

console.log(resultado);

// el filter tambien se usa para quitar un elemento en concreto, ya que el return es un array nuevo, se pueden coger TODOS los elementos que componen ese array menos el que haga match

console.log(carrito.filter( item => item.nombre !== "Teclado"))


