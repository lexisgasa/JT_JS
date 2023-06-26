const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

// para desestructurar objetos anidados hay que obtener el valor del objeto, abrir ese objeto : {} y escribir la llave
// ! esto desestructura y guarda en la variable el peso, no el objeto "informacion" como tal

const {informacion: { medidas:{peso, medida} }, precio} = producto

console.log(peso)
console.log(medida)
console.log(precio)