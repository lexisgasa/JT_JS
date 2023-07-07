// traverse de DOM significa acceder y moverse entre los elementos 

// accedemos a el navbar <nav> que tiene la clase de navegacion
const navegacion = document.querySelector(".navegacion");
console.log(navegacion)

// con esto consultamos los nodos que dependen de el, en este caso son todo links <a>
console.log(navegacion.childNodes); // apareceran elementos tipo text, y es que al formatear el documento quedaran saltos para tenerlo en diferentes lineas, ese texto es extra y considerado nodo


console.log(navegacion.children); // este da los nodos pero sin el texto

console.log(navegacion.childElementCount) // devuelve el numero de children



const card = document.querySelector(".card");

console.log(card.children); // accedemos a la cantidad de nodos nested
console.log(card.children[1]); // accedemos a uno de ellos
console.log(card.children[1].children); //este nodo tambien tiene children
console.log(card.children[1].children[2]); // por lo que podemos acceder a sus hijos
console.log(card.children[1].children[2].textContent); // y podemos acceder a sus propiedades




// ! tambien se puede hacer de hijos a padres