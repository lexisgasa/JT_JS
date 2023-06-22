const authenticated = true;

// if authenticated = true significa solo con authenticated ya va a leer esa parte del codigo
if (authenticated) {
    console.log("Puedes acceder")
} else {
    console.log("No puedes acceder")
}


// el operador ternario lo hace mas simple

console.log(authenticated ? "Puedes acceder ": "NO puedes acceder")

//  lo que es lo mismo
authenticated ? console.log("Puedes acceder") : console.log("No puedes acceder")