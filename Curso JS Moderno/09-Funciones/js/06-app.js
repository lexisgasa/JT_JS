
iniciarApp(); // no da error ya que es una declaracion de la funcion, y no una expresion de la funcion

function iniciarApp(){
    console.log("Iniciando app...")
    // podemos llamar funciones dentro de otras funciones
    autenticando("Alex");
}

function autenticando(user){
    console.log("Autenticado usuario... un momento..")
    console.log(`${user} autenticado exitosamente`)
}