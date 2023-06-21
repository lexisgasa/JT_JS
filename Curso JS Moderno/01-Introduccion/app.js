// alert("Hola Mundo")
'use strict';


// ? prompt abrirá una ventana que pedirá info al suar, se guardar esa info en una constante llamada "nombre"
// const nombre = prompt('Cual es tu nombre?');
// ? el titulo cambiará con el nombre de la constante
// document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno`;



// La consola es muy útil ya que se puede ver el código de JS, resultados y seleccionar elementos

// Se pueden crear variables e imprimirlas
const hola = "Hola desde la consola";
console.log(hola);

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// ? También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// ? o mostrar algún error
console.error("Algo salió mal");

// ? Limpiar la consola
console.clear();

// ? O enviar advertencias
console.warn("Eso no esta permitido");

// También se puede monitorear el tiempo que tarda algo en ejecutarse, a manos .warn pongamos más tiempo tardará
console.time('Hola'); console.warn("Eso no esta permitido");
console.timeEnd('Hola');
   

// Como recomendación siempre pon una instrucción por linea en js

