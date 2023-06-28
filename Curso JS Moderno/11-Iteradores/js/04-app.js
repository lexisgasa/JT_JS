// el do while es otro iterador que funciona igual que el while pero la diferencia es que este se ejecuta como minimo una vez, luego verifica la condicion -- el while no se ejecuta ni 1 si la condicion es falsa de primeras


let i = 1000;

do {

    console.log(`Número ${i}`)

    i++; // de nuevo no olvidar para no tener un ciclo infinito

} while ( i <= 10 )

// saldra un console log con el numero 1000, comprueba si se cumple la condicion o no y como es que no, para, pero ya se ha ejecutado una vez 