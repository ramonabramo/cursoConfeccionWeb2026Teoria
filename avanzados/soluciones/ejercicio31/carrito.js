export class Carrito {
    #productos = [];
    agregar(producto) {
        if (!producto || typeof producto.nombre !== "string" || typeof producto.precio !== "number" || !Number.isFinite(producto.precio) || producto.precio < 0) {
            throw new TypeError("Producto no válido.");
        }
        this.#productos.push({ ...producto });
    }
    get cantidad() { return this.#productos.length; }
    get total() { return this.#productos.reduce((suma, producto) => suma + producto.precio, 0); }
    vaciar() { this.#productos.length = 0; }
}
