const CLAVE = "curso-js-ejercicio24";
let notas = [];
const salida = document.querySelector("#salida");
function renderizar() {
    const lista = document.querySelector("#lista");
    lista.replaceChildren();
    notas.forEach((nota) => {
        const li = document.createElement("li");
        li.textContent = nota;
        lista.append(li);
    });
}
try {
    const datos = JSON.parse(localStorage.getItem(CLAVE) ?? "[]");
    if (!Array.isArray(datos) || !datos.every((nota) => typeof nota === "string" && nota.trim() !== "")) {
        throw new Error("La estructura guardada no es una lista de notas.");
    }
    notas = datos;
    salida.textContent = `Notas recuperadas: ${notas.length}`;
} catch (error) {
    salida.textContent = `No se pudieron recuperar las notas: ${error.message} Puedes empezar una lista nueva.`;
}
document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const entrada = document.querySelector("#nota");
    const nota = entrada.value.trim();
    if (!nota) { salida.textContent = "Escribe una nota."; return; }
    notas.push(nota);
    entrada.value = "";
    renderizar();
    try {
        localStorage.setItem(CLAVE, JSON.stringify(notas));
        salida.textContent = "Nota guardada.";
    } catch (error) {
        salida.textContent = `Solo en memoria: no se pudo guardar. ${error.message}`;
    }
});
document.querySelector("#borrar").addEventListener("click", () => {
    notas = [];
    renderizar();
    try {
        localStorage.removeItem(CLAVE);
        salida.textContent = "Notas borradas.";
    } catch (error) {
        salida.textContent = `Lista vacía en memoria; el borrado persistente falló: ${error.message}`;
    }
});
renderizar();
