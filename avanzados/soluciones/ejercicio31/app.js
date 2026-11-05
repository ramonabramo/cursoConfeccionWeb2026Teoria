import { Carrito } from "./carrito.js";
import { productos } from "./datos.js";
import { formatearEuros } from "./formato.js";
const carrito = new Carrito();
const salida = document.querySelector("#salida");
function renderizar() {
    salida.textContent = `${carrito.cantidad} unidades; total: ${formatearEuros(carrito.total)}`;
}
productos.forEach((producto) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = `${producto.nombre} — ${formatearEuros(producto.precio)}`;
    boton.addEventListener("click", () => {
        try { carrito.agregar(producto); renderizar(); }
        catch (error) { salida.textContent = error.message; }
    });
    document.querySelector("#productos").append(boton);
});
document.querySelector("#vaciar").addEventListener("click", () => { carrito.vaciar(); renderizar(); });
renderizar();
