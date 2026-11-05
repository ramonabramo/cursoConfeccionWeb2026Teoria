document.querySelector("#clasificar").addEventListener("click", () => {
    const nota = document.querySelector("#nota").valueAsNumber;
    const salida = document.querySelector("#salida");
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
        salida.textContent = "Nota no válida.";
    } else if (nota >= 9) {
        salida.textContent = "Sobresaliente";
    } else if (nota >= 7) {
        salida.textContent = "Notable";
    } else if (nota >= 5) {
        salida.textContent = "Aprobado";
    } else {
        salida.textContent = "Suspenso";
    }
});
