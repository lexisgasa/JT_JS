// el operador && revisa que se cumplan las condiciones, que sean true, si hay una false la condicion entera sera false

const usuario = true;
const puedePagar = false; // tendría que estar en true para entrar en el if, como es false pasa al siguiente else que pide que el usuario sea falso, pero como esta en true pasa al siguiente else, que pide que el metodo este en falso, como este tambien esta en falso se queda ahí

if (usuario && puedePagar) {
  console.log("Es un usuario autenticado que puede pagar");
} else if (!usuario) {
  console.log("Inicia sesion o crea una cuenta nueva");
} else if (!puedePagar) {
  console.log("No hay dinero suficiente");
} else {
  console.log("No puede pagar");
}
