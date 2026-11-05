const salida = document.querySelector("#salida");
document.querySelector("#calcular").addEventListener("click", () => {
    const textoA = document.querySelector("#a").value;
    const textoB = document.querySelector("#b").value;
    if (textoA.trim() === "" || textoB.trim() === "") {
        salida.textContent = "Completa los dos números.";
        return;
    }
    const a = Number(textoA);
    const b = Number(textoB);
    salida.textContent = Number.isFinite(a) && Number.isFinite(b)
        ? `Suma: ${a + b}` : "Introduce números válidos.";
});
