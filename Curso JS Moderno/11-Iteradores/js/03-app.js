// do while se ejecutara mientras la condicion sea verdadera

let i = 0; // primero inicializamos

while(i <= 10){

    if( i % 2 === 0) {
        console.log(`${i} ES PAR!!`)
    } else {
        console.log(i.toString()); //pasado a string por el color del console.log lol
    }

    i++ // importante el i++ porque sino queda un ciclo infinito
}