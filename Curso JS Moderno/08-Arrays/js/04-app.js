const meses = new Array("Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

// los objetos y arreglos pueden modificar valores aunque esten declarados con const
meses[11] = "Navidad";

// tambien se pueden añadir de la misma manera, si en el indice no hay valor
meses[12] = "el mes 13 no existe";

// si se crea un elemento en un indice en el cual anterior a ese no hay otros elementos, estos indices tampoco se crean

meses[24] = "2do año" // en este caso pasara del indice 12 al 24, no habra nada en medio

console.table(meses)