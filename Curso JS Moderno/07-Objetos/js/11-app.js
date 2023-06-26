// object literal es la manera de crear objetos literalmente
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
  };

// object constructor es la manera de crear templates de objetos mediante la funcion constructor()
function Producto(nombre = "Nada", precio = 0){ // le damos default properties
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet", 500);
// a producto3 no se le daran values por lo cual aparecera con las default properties
const producto3 = new Producto();

console.log(producto2);
console.log(producto3);