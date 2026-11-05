const boton = document.querySelector("#cargar");
const salida = document.querySelector("#salida");
const lista = document.querySelector("#lista");
boton.addEventListener("click", async () => {
    boton.disabled = true;
    salida.textContent = "Cargando…";
    lista.replaceChildren();
    try {
        const respuesta = await fetch(document.querySelector("#archivo").value);
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}: no se pudo cargar el archivo.`);
        const productos = await respuesta.json();
        if (!Array.isArray(productos) || !productos.every((p) => p && typeof p.nombre === "string" && typeof p.precio === "number" && Number.isFinite(p.precio) && p.precio >= 0)) {
            throw new Error("Estructura de productos no válida.");
        }
        productos.forEach(({ nombre, precio }) => {
            const li = document.createElement("li");
            li.textContent = `${nombre}: ${precio.toFixed(2)} €`;
            lista.append(li);
        });
        salida.textContent = productos.length ? `${productos.length} productos cargados.` : "Sin productos.";
    } catch (error) {
        salida.textContent = `No se pudo cargar: ${error.message}`;
    } finally {
        boton.disabled = false;
    }
});
