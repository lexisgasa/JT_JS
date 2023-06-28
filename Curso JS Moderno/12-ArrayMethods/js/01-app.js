const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// podemos usar el metodo de array includes para comprobar si el parametro esta en el array
console.log(meses.includes("Enero"));
console.log(meses.includes("Diciembre"));


// pero no sirve para objetos, por eso se usa .some
console.log( carrito.some( item => item.nombre === "Monitor 27 Pulgadas") ) // solo monitor devuelve false, es case sensitive




// ! la diferencia es que includes() busca un valor en concreto, some() busca un valor que pase la condicion