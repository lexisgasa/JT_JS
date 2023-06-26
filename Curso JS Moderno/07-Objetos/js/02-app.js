const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

// para acceder a las propiedades del objeto se puede conseguir mediante la sintaxis de puntos
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);



// tambien se peude acceder mediante claudators [] aunque no es tan común
console.log(producto["nombre"])
console.log(producto["precio"])
console.log(producto["disponible"])