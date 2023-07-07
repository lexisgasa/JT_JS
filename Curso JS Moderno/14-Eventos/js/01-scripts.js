// el evento DOMContentLoaded ejecutara la funcion que vaya acompañada uan vez se haya cargado el html


// en el siguiente caso aparecerá por consola primero el 1, 3 y luego 2 

console.log(1);

document.addEventListener("DOMContentLoaded", () => {
    console.log(2);
    console.log("document listo")
} )
console.log(3);