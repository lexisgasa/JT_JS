// para evitar el else if se pueden hacer diferentes if, pero cada uno debe llevar la palabra "return" para que una vez se cumple una condicion no siga leyendo codigo y siga leyendo condiciones.
// ! return debe ir en una funcion

const puntuacion = 500;

function revisarPuntuacion() {
  if (puntuacion > 400) {
    console.log("excelente");
    return;
  }
  if (puntuacion > 300) {
    console.log("felicidades, buena puntuacion");
    return;
  }
}

revisarPuntuacion();
