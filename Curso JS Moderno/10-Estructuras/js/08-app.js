// el operador ternario sigue la sintaxis (condicion) ? si es true ejecuta aqui : si no es true ejecuta esta;

let autenticado = true;
let puedePagar = true;

console.log(autenticado && puedePagar ? "user autenticado" : "crea una cuenta")


// en el siguiente ejemplo saldra la segunda parte del codigo
puedePagar = false;

console.log(autenticado && puedePagar ? "user autenticado" : "crea una cuenta")