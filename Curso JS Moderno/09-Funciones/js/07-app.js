// si la funcion tiene un console log realmente no va a devolver ningun resultado, por eso necesitamos el return
function sumar(a,b) {
    return a + b;
}

// una vez se retorna el resultado debe grabarse en una variable o hacer algo con ese resultado al momento, de otra manera se pierde
const resultado = sumar(2,3);

console.log(resultado)



console.log("_____________________________")
console.log("__________EJEMPLO REAL_______")
console.log("_____________________________")

// ejemplo funcional para sumar productos y calcular el iva basado en su precio final

function addItem(price) {
    return total += price;
};

function taxCalculator(total){
    return total * 1.21;
};


let total = 0;

addItem(300);
addItem(600);

const totalPagar = taxCalculator(total)

console.log(`El precio es de ${total}€ + el 21% del IVA: ${totalPagar}€`)
