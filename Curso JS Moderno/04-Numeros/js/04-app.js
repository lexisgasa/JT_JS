let resultado;

// jerarquia de operaciones
resultado = 20 + 30 * 2;
console.log(resultado)

resultado = (20 + 30) * 2
console.log(resultado)

// 20% descuento
resultado = (20 + 30 + 40 + 50 + 60 ) * 0.2
console.log(resultado)


// incrementos
let puntuacion = 5;
// log de puntuacion y suma += 1, al volver a llamar ya es 6
console.log(puntuacion++)
console.log(puntuacion)
// aqui el log da el += 1 directamente
console.log(++puntuacion)


// pasa igual con los decrementos
console.log(--puntuacion)