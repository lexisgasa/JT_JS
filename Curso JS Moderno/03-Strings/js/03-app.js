// concatenar significa  unir 2 textos o variables:
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

// Concatenar una string a la variable producto, ya que producto no acaba con un espacio y concat no empieza con uno, aparecera pegado PulgadasEn Descuento
console.log(producto.concat('En Descuento')); 

// Concactenar una variable a la variable producto, hay que tener en cuenta que despues de Pulgadas no hay un espacio, ni en el inicio antes de 30, por lo que imprimira Pulgadas30 USD
console.log(producto.concat(precio)); 

// Otras formas de concatenar:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); 
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); // Se pueden cambiar los + por ,

// Desde ES6 se usan mejor los template literal que meten variables mediante ${} y se imprime tal cual 

console.log(`El Producto ${producto} tiene un precio de ${precio}`);