// podemos eliminar un elemento desde el DOM por si mismo o desde el padre


// por si mismo
const primerLink = document.querySelector("a");
console.log(primerLink);
primerLink.remove();


// desde el padre pasando la referencia del elemento a eliminar
const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2])