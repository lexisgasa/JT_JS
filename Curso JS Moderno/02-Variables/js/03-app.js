// el tercer tipo es const
// Existen pocas diferencias entre let y const, asi que vamos a verlas:

// el valor no puede ser re-asignado:

const producto = 'Monitor 30 Pulgadas';
console.log(producto);
producto = 'Monitor 23 Pulgadas'; // error, el producto ya ha sido declarado y no puede reasignarse

// Por otro lado, las variables con const, deben iniciarse con un valor:
// const precio;  error
precio = 20;
console.log(precio);

