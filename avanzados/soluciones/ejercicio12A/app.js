"use strict";
const menu = document.querySelector("#menu");
const pantalla = document.querySelector("#pantalla");
// Un único escuchador atiende también futuros elementos de la lista.
menu.addEventListener("click", (evento) => {
    const opcion = evento.target.closest("li");
    if (!opcion || !menu.contains(opcion)) return;
    pantalla.textContent = opcion.textContent.trim();
});
