//Cuando el usuario salga del Sitio Web se cambia el TITULO
let tituloPrevio = document.title

window.addEventListener("blur", () => {
    tituloPrevio = document.title
    document.title = "¡Votanos!"
})


window.addEventListener("focus", () => {
    document.title = tituloPrevio
})