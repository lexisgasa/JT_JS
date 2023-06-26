// se llama parametro al n1, n2  que son los valores que pide la funcion para ser dinamica

function sumar (n1, n2) {
    return n1+n2
};


// al darle valores cuando se llama, se le llama argumentos
console.log(sumar(200,184));
console.log(sumar(124,221));
console.log(sumar(84,19));



// se les puede dar valores default en caso de que no se den argumentos
function saludar(nombre = "tio", apellido = "") {
    console.log(`Hola ${nombre} ${apellido}!`)
}

saludar("Alexis", "Garcia")
saludar()