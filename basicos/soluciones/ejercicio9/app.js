document.querySelector("#calcular").addEventListener("click", () => {
    const a = document.querySelector("#a").valueAsNumber;
    const b = document.querySelector("#b").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        salida.textContent = "Completa dos números válidos.";
        return;
    }
    let resultado;
    switch (document.querySelector("#operacion").value) {
        case "sumar": resultado = a + b; break;
        case "restar": resultado = a - b; break;
        case "multiplicar": resultado = a * b; break;
        case "dividir":
            if (b === 0) {
                salida.textContent = "No se puede dividir entre cero.";
                return;
            }
            resultado = a / b;
            break;
        default:
            salida.textContent = "Operación desconocida.";
            return;
    }
    salida.textContent = `Resultado: ${resultado}`;
});
