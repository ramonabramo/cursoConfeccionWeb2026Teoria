const estudiante = {
    nombre: "Ana",
    puntos: 0,
    presentarse() {
        return `${this.nombre}: ${this.puntos} puntos`;
    }
};
const salida = document.querySelector("#salida");
function renderizar() { salida.textContent = estudiante.presentarse(); }
document.querySelector("#actualizar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value.trim();
    if (nombre === "") { salida.textContent = "Escribe un nombre."; return; }
    estudiante.nombre = nombre;
    renderizar();
});
document.querySelector("#sumar").addEventListener("click", () => {
    estudiante.puntos += 1;
    renderizar();
});
document.querySelector("#copiar").addEventListener("click", () => {
    const copia = { ...estudiante };
    const { nombre, puntos } = copia;
    // Registrar los valores primitivos evita la vista diferida de objetos de algunas consolas.
    console.log("Copia:", nombre, puntos);
    salida.textContent = `Copia: ${nombre}, ${puntos} puntos. Suma y compara los valores registrados.`;
});
renderizar();
