let intervalo = null;
const iniciar = document.querySelector("#iniciar");
const cancelar = document.querySelector("#cancelar");
const salida = document.querySelector("#salida");
function detener() {
    clearInterval(intervalo);
    intervalo = null;
    iniciar.disabled = false;
    cancelar.disabled = true;
}
iniciar.addEventListener("click", () => {
    if (intervalo !== null) return;
    const segundos = document.querySelector("#segundos").valueAsNumber;
    if (!Number.isInteger(segundos) || segundos < 1 || segundos > 10) { salida.textContent = "Usa un entero de 1 a 10."; return; }
    const fin = performance.now() + segundos * 1000;
    iniciar.disabled = true;
    cancelar.disabled = false;
    salida.textContent = `Quedan ${segundos} segundos`;
    intervalo = setInterval(() => {
        const restantes = Math.max(0, Math.ceil((fin - performance.now()) / 1000));
        salida.textContent = restantes === 0 ? "Tiempo terminado" : `Quedan ${restantes} segundos`;
        if (restantes === 0) detener();
    }, 100);
});
cancelar.addEventListener("click", () => {
    detener();
    salida.textContent = "Cuenta cancelada";
});
document.querySelector("#orden").addEventListener("click", () => {
    console.log("A");
    setTimeout(() => console.log("B"), 0);
    console.log("C");
});
