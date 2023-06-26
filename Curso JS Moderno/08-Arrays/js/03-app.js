const meses = new Array("Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

console.log(meses)
console.table(meses)

// el metodo .length se usa para mirar cuanto mide el array
console.log(meses.length)

// utilizamos un for loop para recorrer el array, elemento por elemento, y con el .length conseguimos que recorra tantas veces como elementos haya
for ( let i = 0; i < meses.length; i++ ){
    console.log(meses[i])
}