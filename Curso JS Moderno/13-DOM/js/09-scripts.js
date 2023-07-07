// generar html desde js

const enlace = document.createElement("a");

// añadimos sus propiedades invidualmente ya que el elemento creado parte de 0
enlace.textContent = "Nuevo enlace";
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";

console.log(enlace);


// seleccionamos el navbar, que es donde meteremos los enlaces 

const navegacion = document.querySelector(".navegacion");

// lo insertamos y aparecera en la ultima posicion
navegacion.appendChild(enlace)



// todo un ejemplo un poco mas complejo, un card de forma dinamica

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");


const parrafo3 = document.createElement("p");
parrafo3.textContent = "800€ por persona";
parrafo3.classList.add("precio");

// creamos imagen
const img = document.createElement("img");
img.src = "img/hacer2.jpg";
img.alt = "texto alternativo";


// creamos div con la clase info
const info = document.createElement("div");
info.classList.add("info");

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


// creamos el card
const card = document.createElement("div");
card.classList.add("add");

// asignamos imagen y la info
card.appendChild(img);
card.appendChild(info)

// metemos todo en el html y en la seccion "hacer" con las demas cards 
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
