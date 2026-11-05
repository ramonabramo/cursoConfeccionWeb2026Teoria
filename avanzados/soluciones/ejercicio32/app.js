import { cargarProductos } from "./api.js";
import { leerFavoritos, guardarFavoritos } from "./almacenamiento.js";
let productos = [];
let favoritos = [];
let estado = "Pulsa Cargar para empezar.";
let aviso = "";
const salida = document.querySelector("#salida");
const lista = document.querySelector("#lista");
const cargar = document.querySelector("#cargar");
const euros = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
try { favoritos = leerFavoritos(); }
catch (error) { aviso = `No se recuperaron los favoritos: ${error.message}`; }
function renderizar() {
    const termino = document.querySelector("#busqueda").value.trim().toLocaleLowerCase("es");
    const soloStock = document.querySelector("#disponibles").checked;
    const soloFavoritos = document.querySelector("#soloFavoritos").checked;
    const visibles = productos.filter((p) => p.nombre.toLocaleLowerCase("es").includes(termino)
        && (!soloStock || p.stock > 0) && (!soloFavoritos || favoritos.includes(p.id)));
    lista.replaceChildren();
    visibles.forEach((producto) => {
        const li = document.createElement("li");
        const texto = document.createElement("span");
        texto.textContent = `${producto.nombre} — ${euros.format(producto.precio)} — stock: ${producto.stock}`;
        const boton = document.createElement("button");
        boton.type = "button";
        boton.dataset.id = producto.id;
        const favorito = favoritos.includes(producto.id);
        boton.textContent = favorito ? "Quitar favorito" : "Marcar favorito";
        boton.setAttribute("aria-pressed", String(favorito));
        li.append(texto, boton);
        lista.append(li);
    });
    const suma = visibles.reduce((total, producto) => total + producto.precio, 0);
    salida.textContent = `${estado}\n${visibles.length} visibles; suma: ${euros.format(suma)}${aviso ? "\n" + aviso : ""}`;
}
cargar.addEventListener("click", async () => {
    cargar.disabled = true;
    productos = [];
    estado = "Cargando…";
    renderizar();
    try {
        productos = await cargarProductos(document.querySelector("#origen").value);
        estado = productos.length ? "Catálogo cargado." : "Catálogo vacío.";
    } catch (error) {
        estado = `Error al cargar: ${error.message}`;
    } finally {
        cargar.disabled = false;
        renderizar();
    }
});
document.querySelector("#busqueda").addEventListener("input", renderizar);
for (const id of ["disponibles", "soloFavoritos"]) document.querySelector(`#${id}`).addEventListener("change", renderizar);
lista.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button[data-id]");
    if (!boton || !lista.contains(boton)) return;
    const id = boton.dataset.id;
    if (!productos.some((producto) => producto.id === id)) return;
    favoritos = favoritos.includes(id) ? favoritos.filter((favorito) => favorito !== id) : [...favoritos, id];
    try { guardarFavoritos(favoritos); aviso = ""; }
    catch (error) { aviso = `Favoritos solo en memoria: ${error.message}`; }
    renderizar();
});
renderizar();
