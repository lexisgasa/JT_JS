const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// podemos revisar si dos numeros son iguales
// solo un = significa asignacion, darle valor
// dos iguales es el comparador estricto quye comprueba el contenido si es igual, 3 iguales si tambien son del mismo tipo
console.log(numero1 == numero2)
console.log(numero2 == numero3)

console.log(typeof numero1) // -> numero
console.log(typeof numero2) // -> string

// utilizando metodos de numeros
console.log(numero1 === numero2) // falso ya que uno es numero y otro string
console.log(numero1 === parseInt(numero2)) // verdadero ya que se ha convertido el string



// comprobar si dos numeros no son iguales
console.log(numero1 != numero2) // falso porque no estrictamente son el mismo numero
console.log(numero1 !== numero2) // verdadero porque estrictamente no son iguales

// comparador mayor o menor o igual que
