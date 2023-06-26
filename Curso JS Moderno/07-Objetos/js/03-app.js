const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}


// para agregar o quitar propiedades al producto, se puede hacer o bien mediante el objeto per se, o bien añadiendo la propiedad con el . y asignando un valor, si la key ya la contenía el producto entonces se reescribirá

producto.imagen = "imagen.jpg"

console.log(producto)

// para quitar propiedades usar la palabra reservada delete
delete producto.imagen;

console.log(producto)