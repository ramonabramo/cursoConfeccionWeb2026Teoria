const numeros = [];
const entrada = document.querySelector("#numero");
const salida = document.querySelector("#salida");
function renderizar() {
    if (numeros.length === 0) {
        salida.textContent = "Sin datos";
        return;
    }
    let suma = 0;
    let minimo = numeros[0];
    let maximo = numeros[0];
    for (const numero of numeros) {
        suma += numero;
        if (numero < minimo) minimo = numero;
        if (numero > maximo) maximo = numero;
    }
    salida.textContent = `Datos: ${numeros.join(", ")}\nSuma: ${suma}; media: ${(suma / numeros.length).toFixed(2)}; mínimo: ${minimo}; máximo: ${maximo}`;
}
document.querySelector("#anadir").addEventListener("click", () => {
    const numero = entrada.valueAsNumber;
    if (!Number.isFinite(numero)) {
        salida.textContent = "Introduce un número válido.";
        return;
    }
    numeros.push(numero);
    entrada.value = "";
    renderizar();
});
document.querySelector("#vaciar").addEventListener("click", () => {
    numeros.length = 0;
    renderizar();
});
renderizar();
