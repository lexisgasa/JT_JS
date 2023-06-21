// los metodos para los strings son funciones que se pueden usar para obtener cierta informacion

const producto = "Monitor 20";

console.log(producto)

// el metodo length indica el numero de caracteres de string
console.log(producto.length)

// el metodo indexof indica si el argumento pasado existe en la variable, y nos devuelve la posicion del primer caracter, -1 significa que no lo ha encontrado
console.log(producto.indexOf("Monitor"))
console.log(producto.indexOf("20"))

// el metodo includes indica si existe o no, por lo que solo devuelve true o falso. Es case sensitive por lo tanto el primero sera true y el segundo false
console.log(producto.includes("Monitor"))
console.log(producto.includes("monitor"))