let actual = null;
const entrada = document.querySelector("#busqueda");
const cancelar = document.querySelector("#cancelar");
const salida = document.querySelector("#salida");
const lista = document.querySelector("#lista");
entrada.value = new URLSearchParams(location.search).get("q") ?? "";
document.querySelector("#formulario").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    if (actual) actual.abort();
    const controlador = new AbortController();
    actual = controlador;
    const termino = entrada.value.trim();
    const url = new URL(location.href);
    if (termino) url.searchParams.set("q", termino); else url.searchParams.delete("q");
    history.replaceState(null, "", url);
    cancelar.disabled = false;
    salida.textContent = "Buscando…";
    lista.replaceChildren();
    try {
        const respuesta = await fetch("datos/libros.json", { signal: controlador.signal });
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const libros = await respuesta.json();
        if (!Array.isArray(libros) || !libros.every((libro) => libro && typeof libro.titulo === "string")) throw new Error("Lista de libros no válida.");
        if (actual !== controlador) return;
        const resultados = libros.filter(({ titulo }) => titulo.toLocaleLowerCase("es").includes(termino.toLocaleLowerCase("es")));
        resultados.forEach(({ titulo }) => {
            const li = document.createElement("li");
            li.textContent = titulo;
            lista.append(li);
        });
        salida.textContent = resultados.length ? `${resultados.length} resultados.` : "Sin resultados.";
    } catch (error) {
        if (actual !== controlador) return;
        salida.textContent = error.name === "AbortError" ? "Petición cancelada." : `Error: ${error.message}`;
    } finally {
        if (actual === controlador) {
            actual = null;
            cancelar.disabled = true;
        }
    }
});
cancelar.addEventListener("click", () => { if (actual) actual.abort(); });
