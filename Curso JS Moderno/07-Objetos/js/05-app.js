// los objetos pueden tener anidados otros objetos

const producto = {
        nombre: "Monitor de 20 pulgadas",
        precio: 300,
        disponible: true,
        informacion: {
            peso: "1kg",
            medida: "1m"
        }
    }

    // para acceder a las propiedades se hace a traves del punto

    console.log(producto.informacion) // dara un objeto
    console.log(producto.informacion.peso)
    console.log(producto.informacion.medida)