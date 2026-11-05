function pedirTurno(fallar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fallar) reject(new Error("No quedan turnos. Reintenta sin simular el error."));
            else resolve("Turno 7");
        }, 600);
    });
}
const boton = document.querySelector("#pedir");
const salida = document.querySelector("#salida");
boton.addEventListener("click", () => {
    const fallar = document.querySelector("#fallar").checked;
    boton.disabled = true;
    salida.textContent = "Cargando…";
    pedirTurno(fallar)
        .then((turno) => { salida.textContent = turno; })
        .catch((error) => { salida.textContent = `Error: ${error.message}`; })
        .finally(() => { boton.disabled = false; });
});
