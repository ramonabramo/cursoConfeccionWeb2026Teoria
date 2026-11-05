export async function cargarProductos(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    const datos = await respuesta.json();
    if (!Array.isArray(datos) || !datos.every((p) => p && typeof p.id === "string" && p.id.trim() !== "" && typeof p.nombre === "string" && p.nombre.trim() !== "" && Number.isFinite(p.precio) && p.precio >= 0 && Number.isInteger(p.stock) && p.stock >= 0)) {
        throw new Error("Catálogo no válido.");
    }
    if (new Set(datos.map((p) => p.id)).size !== datos.length) throw new Error("Hay IDs duplicados.");
    return datos;
}
