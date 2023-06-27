// el operador || revisa todas las condiciones hasta encontrar el primero que cumpla la condicion

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;
// la primera condicion no se cumple, por lo cual si estuviese sola saltaria al else
if (efectivo > totalPagar || credito > totalPagar) {
    console.log("Si se puede comprar")
} else {
    console.log("Dinero insuficiente")
}