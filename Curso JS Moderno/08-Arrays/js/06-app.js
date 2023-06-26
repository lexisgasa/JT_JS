const carrito = [];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
};

const producto2 = {
    nombre: "iPhone",
    precio: 900
};

const producto3 = {
    nombre: "Logitech Lift",
    precio: 90
}

// tambien se pueden añadir con el spread operator, el cual NO modifica el array original

let total = [...carrito]; // ahora está vacio
console.log(total)

total = [...carrito, producto] // copia carrito vacio y añade producto
console.log(total)

total = [...carrito, producto2] // copia carrito vacio y añade producto2
console.log(total)

total = [...carrito, producto, producto2] // copia carrito vacio y añade ambos productos
console.log(total)


total = [producto3,...total ] // copia el total hasta el momento, y añade el producto 3 AL INICIO
console.log(total)