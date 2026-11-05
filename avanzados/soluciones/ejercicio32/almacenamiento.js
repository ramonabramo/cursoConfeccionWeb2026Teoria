const CLAVE = "curso-js-ejercicio32-favoritos";
export function leerFavoritos() {
    const datos = JSON.parse(localStorage.getItem(CLAVE) ?? "[]");
    if (!Array.isArray(datos) || !datos.every((id) => typeof id === "string")) throw new Error("Favoritos no válidos.");
    return [...new Set(datos)];
}
export function guardarFavoritos(ids) {
    localStorage.setItem(CLAVE, JSON.stringify(ids));
}
