// los loops se ejecutaran siempre que la condicion sea true o deje de serlo, depende del tipo

// el más basico es el for loop. se ejecuta hasta que el codigo deja de cumplir la condicion

// el inicializador, que numero debe tener para dejar de iterar, y que hace al acabar de ejecutarse el código

for (let i = 1; i <= 10; i++) {
    console.log(`Número ${[i]}`)  
}

console.log("__________________________")
for (let i = 1; i <= 25; i += 4) {
    console.log(`Número ${[i]}`)  
}


// sacando números pares
console.log("__________________________")
for ( let i = 0; i <= 20; i++){
    if([i] % 2 === 0){
        console.log(i)
    } else {
        continue;
    }
}