document.querySelector("#calcular").addEventListener("click", () => {
    const meta = document.querySelector("#meta").valueAsNumber;
    const aportacion = document.querySelector("#aportacion").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isInteger(meta) || !Number.isInteger(aportacion) || meta < 1 || meta > 10000 || aportacion < 1 || aportacion > 10000) {
        salida.textContent = "Usa enteros entre 1 y 10000.";
        return;
    }
    let total = 0;
    let meses = 0;
    while (total < meta) {
        total += aportacion;
        meses += 1;
    }
    salida.textContent = `${meses} meses; total: ${total} €`;
});
