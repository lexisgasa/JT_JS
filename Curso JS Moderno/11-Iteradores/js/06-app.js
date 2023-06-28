// el bucle for of es el más rápido y cómodo, pero el que menos precision tiene

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

//  se le da un valor de variable, en este caso ITEM aunque normalmente es el elemento en individual mientras que el array es en plural, y automaticamente itera en cada uno
for (let item of carrito) {
  console.log(item.nombre);
}

console.log("_________________________");
console.log("____DESESTRUCTURACION____");
console.log("_________________________");
// de igual manera se puede desestructurar si es un objeto
for (let { nombre } of carrito) {
  console.log(nombre);
}





console.log("_________________________");
console.log("__________ARRAY__________");
console.log("_________________________");
// ! tambien itera sobre arrays, y de hecho el for of es más comun usarlo en arrays que en objetos

const pendientes = [
  "Deberes",
  "Comer",
  "Estudiar",
  "Trabajar",
  "Proyecto",
  "Gym",
];

for (let tarea of pendientes){
  console.log(tarea)
}