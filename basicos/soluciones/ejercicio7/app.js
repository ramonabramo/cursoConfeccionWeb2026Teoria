document.querySelector("#comprobar").addEventListener("click", () => {
    const numero = document.querySelector("#numero").valueAsNumber;
    document.querySelector("#salida").textContent = Number.isInteger(numero)
        ? (numero % 2 === 0 ? "Par" : "Impar") : "Introduce un entero.";
});
