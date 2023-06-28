// las palabras reservadas "break" y "continue" son esenciales en los loops



// en los siguientes ejemplos coge un IF STATEMENT pero sin else, por lo tanto cuando llega al if, el código debería seguir ejecutandose se cumpla o no se cumpla la condicion

// la palabra break corta la ejecucion del loop, en cuanto salta se acabó iterar
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Estás en el 5");
    break;
  }
  console.log(`Número ${[i]}`);
}



console.log("_________________________");
// la palabra continue identifica el valor pero no para el loop, corta el ciclo por lo cual no saldra el console log en este caso, pero hara i++ y entonces volvera a iterar
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("CINCO");
    continue;
  }
  console.log(`Número ${[i]}`);
}
