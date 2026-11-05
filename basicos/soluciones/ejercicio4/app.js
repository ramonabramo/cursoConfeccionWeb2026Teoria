document.querySelector("#calcular").addEventListener("click", () => {
    const cantidad = document.querySelector("#cantidad").valueAsNumber;
    const precio = document.querySelector("#precio").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isInteger(cantidad) || cantidad < 1 || !Number.isFinite(precio) || precio < 0) {
        salida.textContent = "Cantidad entera positiva y precio no negativo obligatorios.";
        return;
    }
    const base = cantidad * precio;
    const iva = base * 0.10;
    salida.textContent = `Base: ${base.toFixed(2)} €\nIVA: ${iva.toFixed(2)} €\nTotal: ${(base + iva).toFixed(2)} €`;
});
