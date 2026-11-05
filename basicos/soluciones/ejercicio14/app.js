document.querySelector("#generar").addEventListener("click", () => {
    const numero = document.querySelector("#numero").valueAsNumber;
    const tabla = document.querySelector("#tabla");
    const salida = document.querySelector("#salida");
    tabla.replaceChildren();
    if (!Number.isInteger(numero) || numero < -100 || numero > 100) {
        salida.textContent = "Introduce un entero entre -100 y 100.";
        return;
    }
    for (let i = 1; i <= 10; i += 1) {
        const fila = document.createElement("li");
        fila.textContent = `${numero} × ${i} = ${numero * i}`;
        tabla.append(fila);
    }
    salida.textContent = "10 filas generadas.";
});
