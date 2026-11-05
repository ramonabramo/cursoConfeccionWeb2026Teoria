let tareas = [];
let siguienteId = 1;
const lista = document.querySelector("#lista");
function renderizar() {
    lista.replaceChildren();
    tareas.forEach((tarea) => {
        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = tarea.texto;
        texto.classList.toggle("completada", tarea.completada);
        li.append(texto);
        for (const accion of ["completar", "eliminar"]) {
            const boton = document.createElement("button");
            boton.type = "button";
            boton.dataset.id = String(tarea.id);
            boton.dataset.accion = accion;
            const etiqueta = document.createElement("span");
            etiqueta.textContent = accion === "eliminar" ? "Eliminar" : (tarea.completada ? "Marcar pendiente" : "Completar");
            boton.append(etiqueta);
            li.append(boton);
        }
        lista.append(li);
    });
    document.querySelector("#salida").textContent = `Pendientes: ${tareas.filter((tarea) => !tarea.completada).length}; total: ${tareas.length}`;
}
document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const entrada = document.querySelector("#tarea");
    const texto = entrada.value.trim();
    if (!texto) { document.querySelector("#salida").textContent = "Escribe una tarea."; return; }
    tareas.push({ id: siguienteId++, texto, completada: false });
    entrada.value = "";
    entrada.focus();
    renderizar();
});
lista.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button[data-accion]");
    if (!boton || !lista.contains(boton)) return;
    const id = Number(boton.dataset.id);
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (!tarea) return;
    if (boton.dataset.accion === "completar") tarea.completada = !tarea.completada;
    if (boton.dataset.accion === "eliminar") tareas = tareas.filter((tarea) => tarea.id !== id);
    renderizar();
});
renderizar();
