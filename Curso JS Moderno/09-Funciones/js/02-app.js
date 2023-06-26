// declaracion de funcion

// ? aqui entra el hoisting
// puede inicializar porque js primero hace un barrido de las funciones y las guarda en memoria NO como variables
console.log(sumar(2,7));
function sumar (n1, n2) {
    return n1+n2
};




// expresion de funcion

console.log(restar(2,7)); // no puede inicializar porque se llama antes de declararse
let restar = function(n1,n2) {
    return n1-n2
};

