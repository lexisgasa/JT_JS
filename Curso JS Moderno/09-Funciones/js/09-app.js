// las funciones de flecha son las funciones clasicas con una sintaxis mas clara y corta, si tiene una sola linea no hace falta {}, y si es return no hace falta escribirlo

// funcion clasica
const aprendiendo = function(){
    console.log("Aprendiendo js")
};

// arrow function
const aprendiendo2 = () => "Aprendiendo js";

aprendiendo();
aprendiendo2();

// arrow function con parametros, si tiene uno no hacen faltan (), con más de 1 si
const aprendiendo3 = lenguaje => `Aprendiendo ${lenguaje}`;

aprendiendo3("js");