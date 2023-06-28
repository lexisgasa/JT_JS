// el for in es similar al for of, ambos iteran sobre objetos y arrays
const pendientes = [
    "Deberes",
    "Comer",
    "Estudiar",
    "Trabajar",
    "Proyecto",
    "Gym",
  ];

for (let tarea in pendientes){
    console.log(tarea); // esto son los indices
    console.log(pendientes[tarea]) //por lo tanto se aplica cada indice al array de tarea
}


console.log("_________________________");
console.log("__________OBJETO_________");
console.log("_________________________");
// este ciclo es más común usarlo con objetos ya que se pueden obtener los valores o las keys individuales
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

  for (let item in carrito) {
    console.log(item) // de nuevo esto es el indice
    console.log(carrito[item]) // esto es cada objeto individual item[0], item[1]..
  }