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

let total = [];
total = [producto3, producto, producto2]
console.log(total)

// aparte de pop() o shift() tambien tenemos splice() para eliminar elementos
// splice tiene dos parametros, el primero sera el indice target, el segundo sera cuantos elementos borrar desde ahi

total.splice(1,1)
console.log(total)