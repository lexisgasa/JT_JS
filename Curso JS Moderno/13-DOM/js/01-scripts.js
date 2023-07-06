let elemento;


// apuntar a todos los items del document
elemento = document.all;

// ahora apuntar solo a la seccion <head>
elemento = document.head;
// de igual manera se puede seleccionar el <body>
elemento = document.body;

// es posible accceder a todos los elementos de uno en especifico
elemento = document.forms;
// ya que devuelve una collecion HTML que se comporta como un array, se pueden acceder a los elementos segun su indice
elemento = document.forms[0];
// y mediante la puntuacion de los objetos se pueden obtener los valores individuales de sus propiedades
elemento = document.forms[0].method;
// seleccionar clases de la form
elemento = document.forms[0].classList;


// de igual manera que se obtener una lista de todos los links (elemento <a>)
console.log(document.links);
// o acceder a uno en concreto
console.log(document.links[4]);


// u obtener una lista de todas las imagenes que hay en el proyecto y sleccionarlas
console.log(document.images);



console.log(elemento)