// las funciones son bloques de codigo que se ejecutan al llamarse
// son reutilizables por lo tanto se puede usar la misma funcion diferentes veces 



// declaracion de funcion
console.log("================")
console.log("      SUMA      ")
console.log("================")
function sumar (n1, n2) {
    return n1+n2
};

console.log(sumar(2,7));
console.log(sumar(2,2));
console.log(sumar(1,19));


// expresion de funcion
console.log("================")
console.log("     RESTA      ")
console.log("================")
let restar = function(n1,n2) {
    return n1-n2
};

console.log(restar(2,7));
console.log(restar(10,2));
console.log(restar(20,3));

// expresion de funcion como arrow function

console.log("================")
console.log(" MULTIPLICACION ")
console.log("================")
let multiplicar = (n1, n2) => {
    return n1*n2
};

console.log(multiplicar(1,3));
console.log(multiplicar(2,2));
console.log(multiplicar(4,7));