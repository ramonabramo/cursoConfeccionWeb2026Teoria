document.querySelector("#comprobar").addEventListener("click", () => {
    const edad = document.querySelector("#edad").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isInteger(edad) || edad < 0 || edad > 120) {
        salida.textContent = "Edad no válida.";
        return;
    }
    const autorizacion = document.querySelector("#autorizacion").checked;
    const terminos = document.querySelector("#terminos").checked;
    const permitido = terminos && (edad >= 18 || autorizacion);
    salida.textContent = permitido ? "Acceso permitido" : "Acceso denegado";
});
