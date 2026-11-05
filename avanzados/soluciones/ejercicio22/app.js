const productos = [{"id":"p1","nombre":"Teclado","precio":30,"stock":4},{"id":"p2","nombre":"Ratón","precio":15,"stock":0},{"id":"p3","nombre":"Monitor","precio":180,"stock":2},{"id":"p4","nombre":"Cable USB","precio":8,"stock":10}];
const salida = document.querySelector("#salida");
document.querySelector("#filtrar").addEventListener("click", () => {
    const maximo = document.querySelector("#maximo").valueAsNumber;
    const lista = document.querySelector("#lista");
    lista.replaceChildren();
    if (!Number.isFinite(maximo) || maximo < 0) { salida.textContent = "Precio máximo no válido."; return; }
    const seleccion = productos.filter(({ precio }) => precio <= maximo).sort((a, b) => a.precio - b.precio);
    seleccion.forEach(({ nombre, precio }) => {
        const li = document.createElement("li");
        li.textContent = `${nombre}: ${precio.toFixed(2)} €`;
        lista.append(li);
    });
    const nombres = seleccion.map(({ nombre }) => nombre);
    const total = seleccion.reduce((suma, { precio }) => suma + precio, 0);
    salida.textContent = `${nombres.join(", ") || "Sin resultados"}\nSuma: ${total.toFixed(2)} €`;
});
document.querySelector("#buscar").addEventListener("click", () => {
    const id = document.querySelector("#identificador").value.trim();
    const producto = productos.find((producto) => producto.id === id);
    salida.textContent = producto ? `${producto.nombre}: ${producto.precio.toFixed(2)} €` : "Producto no encontrado.";
});
