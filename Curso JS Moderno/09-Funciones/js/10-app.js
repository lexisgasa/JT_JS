const carrito = [
    {
        nombre: "Monitor de 32 pulgadas",
        precio: 400
    },
    {
        nombre: "iPhone",
        precio: 900
    },
    {
        nombre: "Cascos Sony",
        precio: 300
    },
    {
        nombre: "Teclado Keychron",
        precio: 200
    },
    {
        nombre: "Reposamuñecas",
        precio: 25
    },
    {
        nombre: "Logitech Lift",
        precio: 90
    }
];

console.log("    FOR EACH     ")
console.log("_________________")

// forEach con arrow function
// ! recuerda que foreach no retorna un nuevo array, muta el original
carrito.forEach( producto => console.log(`${producto.nombre} cuesta ${producto.precio}`)
);



console.log("         MAP     ")
console.log("_________________")

// map con arrow function

const newArray = carrito.map( producto => `${producto.nombre} cuesta ${producto.precio}`
);

console.log(newArray)