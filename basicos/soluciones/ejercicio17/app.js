const compra = [];
const entrada = document.querySelector("#producto");
const salida = document.querySelector("#salida");
function renderizar() {
    salida.textContent = `Cantidad: ${compra.length}\n${compra.length ? compra.join(", ") : "Lista vacía"}`;
}
document.querySelector("#anadir").addEventListener("click", () => {
    const producto = entrada.value.trim();
    if (producto === "") {
        salida.textContent = "Escribe un producto.";
        return;
    }
    compra.push(producto);
    entrada.value = "";
    entrada.focus();
    renderizar();
});
document.querySelector("#quitar").addEventListener("click", () => {
    compra.pop();
    renderizar();
});
document.querySelector("#vaciar").addEventListener("click", () => {
    compra.length = 0;
    renderizar();
});
renderizar();
