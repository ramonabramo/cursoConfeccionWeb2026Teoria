document.querySelector("#comprobar").addEventListener("click", () => {
    const edad = document.querySelector("#edad").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isInteger(edad) || edad < 0 || edad > 120) {
        salida.textContent = "Edad no válida.";
        return;
    }
    if (edad >= 18) {
        salida.textContent = "Mayor de edad";
    } else {
        salida.textContent = "Menor de edad";
    }
});
