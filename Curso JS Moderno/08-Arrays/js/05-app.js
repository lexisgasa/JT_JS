const meses = new Array("Enero","Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

console.log(meses);
console.log("============================")
console.log("           INICIO")
console.log("============================")
// ? los metodos para añadir o eliminar elementos a los arrays son los siguientes
// .shift para quitar el primer elemento (indice 0)
meses.shift(); // ! desaparece enero
console.log(meses)
// .shift para añadir al principio del array
meses.unshift("Enero")
console.log(meses)


// .pop para eliminar el ultimo elemento
meses.pop(); // ! desaparece diciembre
console.log(meses)
// .push para añadir al final del array
meses.push("Diciembre");
console.log(meses)
