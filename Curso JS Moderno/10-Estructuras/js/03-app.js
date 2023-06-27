const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;

// else if se usa cuando hay más de 2 condiciones, se ejecuta la primera condicion que se cumple, en este caso el primer if y no llega al else if


if (dinero >= totalAPagar) {
  console.log("Se puede comprar");
} else if (tarjeta) {
  console.log("Se puede pagar porque hay tarjeta");
} else if (cheque) {
  console.log("Se puede pagar con cheque");
} else {
  console.log("No hay dinero suficiente");
}

// se pueden poner tantos else if como sean necesarios