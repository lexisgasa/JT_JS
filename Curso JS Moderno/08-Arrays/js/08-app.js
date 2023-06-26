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

// destructuring con arrays
let total = [producto, producto2, producto3];
console.log(total)

// podemos ignorar un value, y a diferencia de los objetos, darle un nombre directo a la variable
const [monitor, , raton] = total;

console.log(monitor);
console.log(raton)