const nav = document.querySelector(".navegacion");

// event listener de raton

nav.addEventListener("click", () => {
    console.log("click en nav")
})


nav.addEventListener("mouseenter", () => {
    nav.style.backgroundColor = "red"
})


nav.addEventListener("mouseout", () => {
    nav.style.backgroundColor = "transparent"

})


// mousedown cuando se pulsa
// mouse up cuando se suelta 
// click
// dblclick 
// entre otros