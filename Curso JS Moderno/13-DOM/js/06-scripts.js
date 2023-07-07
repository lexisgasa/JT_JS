// tambien podemos añadir o quitar clases de css

const encabezado = document.querySelector("h1")

console.log(encabezado);

// los estilos se encuentran con la propiedad style, y las propiedades que van con guion -, van con camelcase
console.log(encabezado.style)
encabezado.style.backgroundColor = "rebeccapurple";
encabezado.style.fontSize = "5rem"


// aunque es mejor añadir o quitar clases mediante la propiedad classList
const card = document.querySelector(".card");
console.log(card)

console.log(card.classList)
card.classList.remove("card")
// se pueden añadir varias clases
card.classList.add("primer-clase", "segunda-clase")