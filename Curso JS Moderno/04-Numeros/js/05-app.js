const num1 = "20";
const num2 = "20.6";
const num3 = "Uno";
const num4 = 20;

// con el metodo Number.parseInt se pasa el numero que en realidad es una string a numero
console.log(Number.parseInt(num1))

// el metodo parseInt va a redondear el numero hacia abajo, por eso el metodo parseFloat pasa los numeros flotantes que son strings a numeros flotantes reales
console.log(parseInt(num2))
console.log(parseFloat(num2))


