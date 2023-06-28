// el metodo findIndex nos permite saber en que indice del array se encuentra cierto el elemento

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// se puede hacer con un for each pero es mas complejo que el findindex
meses.forEach((item, index) => {
  if (item === "Abril") {
    console.log(`Abril se encuentra en el indice ${index}`);
  }
});

// se saca el indice directo; 
const indice = meses.findIndex(mes => mes === "Abril");
console.log(indice);
