// var era la forma de crear variables en versiones anteriores de ECMASscript hoy en día las opciones se reducen a 2
// Las reglas son básicamente las mismas con let 

let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

console.log(producto);


// También se puede inicializar una variable sin valor y asignarlo después

let disponible;
disponible = true;


// Inicializar múltiples variables 
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Mismas reglas para llamarlas