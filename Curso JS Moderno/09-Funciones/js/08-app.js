// funciones en un objeto, se puede obviar la palabra function

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo la canción número ${id}...`)
    },
    pausar(){
        console.log("Pausando..")
    },
    borrar(id){
        console.log(`Borrando la canción número ${id}...`)
    },
    reanudarCancion(){
        console.log("Reanudando canción..")
    }

}



reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.reanudarCancion();