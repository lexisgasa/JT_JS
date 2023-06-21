const producto = "Monitor 20 pulgadas";

// metodos de los mas utiles son replace, slice y substring

// el replace es case sensitive y coge una palabra y remplaza por otra
console.log(producto)
console.log(producto.replace('pulgadas', '""'))
console.log(producto.replace("Monitor", "Monitor curvo"))

// el slice corta una parte, primero donde empieza a cortar incluido, luego donde acaba excluido, si no se indica donde acaba entonces corta hasta el final del string
console.log(producto.slice(0,10))
console.log(producto.slice(8))

// alternativa a slice es substring, que hace lo mismo pero no interpreta los valores negativos

//charAt da el valor del indice pasado
console.log(producto.charAt(0))