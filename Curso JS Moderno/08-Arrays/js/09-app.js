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


for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre}, precio: ${carrito[i].precio}`);   
};

console.log("=================")
console.log("    FOR EACH     ")
console.log("=================")

// el metodo forEach es lo mismo que un ciclo for para arrays
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} cuesta ${producto.precio}`)

})
console.log("=================")
console.log("         MAP     ")
console.log("=================")

// el metodo map es lo mismo que el forEach,pero crea un array nuevo
// el metodo foreach devuelve undefined

const newArray = carrito.map( function(producto) {
    return `${producto.nombre} cuesta ${producto.precio}`

})

console.log(newArray)