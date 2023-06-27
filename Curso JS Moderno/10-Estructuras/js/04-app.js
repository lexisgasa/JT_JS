// cuando hay multiples condiciones a comprobar entonces es mejor de hacerlo con un "switch" en vez de muchos else if

let metodoPago = "";


// se puede combinar con otros metodos de js
metodoPago = prompt("como deseas pagar?")


// switch es case-sensitive, por lo que usar "Efectivo en este caso haria entrar el default"

switch(metodoPago){
    case "efectivo":
        console.log("Pagaste con efectivo")
        break;
    case "cheque":
        console.log("Pagaste con cheque")
        break;
    default:
        console.log("Aún no has seleccionado un método de pago")
}


