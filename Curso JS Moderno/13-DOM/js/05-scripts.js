// podemos modificar textos o imagenes tambien solo con el js

const encabezado = document.querySelector(".contenido-hero h1");

console.log(encabezado);

// hay tres formas de acceder al texto

console.log(encabezado.innerText);
console.log(encabezado.textContent);
// el que muestra el html entero, las entiquetas y propiedades que puedan tene, lo retorna
console.log(encabezado.innerHTML);


// con el elemento seleccionado y apuntando a su propiedad, se puede dar un nuevo valor de esta
document.querySelector(".contenido-hero h1").innerText = "lolapalloza"


// la imagen se puede modificar accediendo a ella a traves del dom y apuntar a su propiedad src.