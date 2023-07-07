// tambien hay eventos con el teclado


const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("keydown", ()=> {
    console.log("escribiendo")
})

// input aparece con cualquier cosa que haga trigger del teclado, el argumento "e" significa evento y da informacion sobre el evento per se
busqueda.addEventListener("input", (e) => {
    console.log(e)
    // podemos sacar que la tecla que se pulse aparecera como data, o el type del evento es input en este caso
console.log(e.target) // contiene toda la info de la tecla o el lugar en concreto pulsado, es muy comun sacar el value
console.log(e.target.value); // es el valor de la tecla pulsada, genial para busquedas
})

// tambien existe keyup
// copy se ejecuta cuando se copia un texto, tambien esta paste cuando se pega algo, y cut
// blur se ejecuta cuando se sale de un elemento