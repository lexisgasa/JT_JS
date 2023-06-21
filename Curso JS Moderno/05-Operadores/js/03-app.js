// Null y Undefined


let numero;

console.log(numero); // La variable esta definida pero no tiene valor por lo tanto es undefinida - undefined
console.log(typeof numero) // es de tipo undefined




// En el caso de null es valor 0
let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // null debe ser un objeto

// Comparando null y undefined
console.log (numero == numero2); // da true porque no hay valor como tal, eso puede llevar a dar fuertes errores

// por eso mejor siempre usar rel comparador estricto
console.log(numero === numero2);
