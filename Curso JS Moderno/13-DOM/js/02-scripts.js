// seleccionar elementos por su clase, aunque no es muy comun hoy en dia
// ! case sensitive, marcar las clases como están definidas en el html
const header = document.getElementsByClassName("header")

console.log(header)

console.log(document.getElementsByClassName("hero"))


// si la misma clase existe en mas de un elemento va a traer de nuevo una lista html, accesible a elementos individuales mediante su posicion de indice
console.log(document.getElementsByClassName("contenedor"))
console.log(document.getElementsByClassName("contenedor")[2])