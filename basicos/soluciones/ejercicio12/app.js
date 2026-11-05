const entrada = document.querySelector("#texto");
function actualizar() {
    const texto = entrada.value.trim();
    document.querySelector("#salida").textContent = `Longitud: ${texto.length}\nMayúsculas: ${texto.toUpperCase()}\nMinúsculas: ${texto.toLowerCase()}`;
}
entrada.addEventListener("input", actualizar);
actualizar();
