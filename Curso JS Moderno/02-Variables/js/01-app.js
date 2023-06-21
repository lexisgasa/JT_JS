// Las variables son una caracteristica de cualquier lenguaje de programación que guardan información

// existen 3 formas de crear variables en JavaScript aunque la opción var no es la recomendada a dia de hoy

// Variables con var

var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico, puede ser de cualquier tipo, aqui de un numero
var precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

var disponible;
disponible = true;


// Inicializar múltiples variables separadas por comas y sin usar var en cada vez
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Reglas para llamar las variables:

// Pueden tener: letras, numeros, el simbolo $, y el simbolo  _
// Pero NO pueden iniciar con numero
//  var 99dias; error
var dias99;

var _01;
// var 01_; error

// se usa camelCase para llamar a las variables, snake_case, o PascalCase
var  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
