const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter)

// function mostrarOcultarFooter(){
//     footer.classList.contains("activo") 
//     ? footer.classList.remove("activo")
//     : footer.classList.add("activo");
// };

// mas facil usando toggle
function mostrarOcultarFooter() {
    footer.classList.toggle("activo");
    btnFlotante.classList.toggle("activo");
}