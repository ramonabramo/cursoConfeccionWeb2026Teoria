const panel = document.querySelector("#panel");
const destacar = document.querySelector("#destacar");
const visibilidad = document.querySelector("#visibilidad");
destacar.addEventListener("click", () => {
    const activo = panel.classList.toggle("destacado");
    destacar.setAttribute("aria-pressed", String(activo));
    document.querySelector("#salida").textContent = activo ? "Panel destacado" : "Estilo inicial";
});
visibilidad.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    visibilidad.textContent = panel.hidden ? "Mostrar panel" : "Ocultar panel";
    visibilidad.setAttribute("aria-expanded", String(!panel.hidden));
    document.querySelector("#salida").textContent = panel.hidden ? "Panel oculto" : "Panel visible";
});
