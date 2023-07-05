const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const meses2 = ["Agosto", "Septiembre"]

const resto = ["Octubre", "Noviembre", "Diciembre"]


// para unir array se puede hacer mediante el metodo concat, se pueden unir más unidos por coma
const meses3 = meses.concat(meses2, resto)

console.log(meses3)


// la otra forma de hacerlo es mediante el spread operator, que copiara todo de cada uno de los arrays
const meses4 = [...meses, ...meses2]

console.log(meses4)