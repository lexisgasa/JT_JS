// el selector mas utilizado es el siguiente, que es similar en cierta medida al css ya que usa . para clases y # para ids

// este metodo va a retornar el primer match que encuentre
console.log(document.querySelector(".card"))

// el siguiente metodo retorna todos los matches
console.log(document.querySelectorAll(".card"));

// podemos usar la especificidad de css
console.log(document.querySelector(".premium .info"))

// o incluso usar el elemento que contiene el div, y apuntar a una card en especifico usando un pseudoselector
console.log(document.querySelector("section.hospedaje .card:nth-child(2)"))