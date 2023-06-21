// un string es una cadena de texto, cualquier cosa entre "", '' o ```

// 3 maneras de crear strigs, aunque realmente la tercera crea un objeto
const producto = "Monitor 20 pulgadas";
const producto2 = String("Monitor 24 pulgadas");
const producto3 = new String("Monitor de 30 pulgadas");

console.log(producto)
console.log(producto2)
console.log(producto3)

// si se necesitan usar comillas dobles pero el string inicializa con comillas dobles, hay que escaparlo usando \

const producto4 = "Monitor de 10\"";

console.log(producto4)