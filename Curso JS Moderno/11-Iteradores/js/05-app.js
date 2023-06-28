// + info del foreach y del map(), la diferencia entre estos es simplemente que el map crea un array nuevo por lo tanto se necesita un nuevo array y return en el map

// sirve para iterar arrays y se ejecutara tantas veces como elementos haya en el array

const pendientes = [
  "Deberes",
  "Comer",
  "Estudiar",
  "Trabajar",
  "Proyecto",
  "Gym",
];

pendientes.forEach((tarea, index) => console.log(`${index} - ${tarea}`));

// tambien itera objetos mientras estén dentro del array

const carrito = [
  {
    nombre: "Monitor de 32 pulgadas",
    precio: 400,
  },
  {
    nombre: "iPhone",
    precio: 900,
  },
  {
    nombre: "Cascos Sony",
    precio: 300,
  },
  {
    nombre: "Teclado Keychron",
    precio: 200,
  },
  {
    nombre: "Reposamuñecas",
    precio: 25,
  },
  {
    nombre: "Logitech Lift",
    precio: 90,
  },
];

// obtener los objetos individuales 1 a 1
carrito.forEach(item => console.log(item))



console.log("_________________________")
console.log("______VALOR DIRECTO______")
console.log("_________________________")
// se puede apuntar a su propiedad directamente
carrito.forEach(item => console.log(item.nombre))

console.log("_________________________")
console.log("____DESESTRUCTURACION____")
console.log("_________________________")
// o hacerlo más rapido desestructurando, aunque se desestructure solo una propiedad, el () es imprescindible
carrito.forEach(({nombre, precio}) => console.log(`El objeto ${nombre} cuesta ${precio}`))




