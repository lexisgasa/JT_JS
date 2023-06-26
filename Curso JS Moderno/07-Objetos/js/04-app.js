const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// la desestructuracion de objetos consiste en utilizar variables con la propiedad del objeto
const nombre = producto.nombre
console.log(nombre)

// esto implicaria una linea para cada variable que se quiera obtener, en ecmascript 6 salio el object destructuring para hacerlo más rapido y facil

const { precio, disponible } = producto;