function aplicarDescuento(precio, porcentaje = 10) {
    return precio * (1 - porcentaje / 100);
}
document.querySelector("#calcular").addEventListener("click", () => {
    const precio = document.querySelector("#precio").valueAsNumber;
    const porcentaje = document.querySelector("#porcentaje").valueAsNumber;
    const valido = Number.isFinite(precio) && precio >= 0 && Number.isFinite(porcentaje) && porcentaje >= 0 && porcentaje <= 100;
    document.querySelector("#salida").textContent = valido
        ? `${aplicarDescuento(precio, porcentaje).toFixed(2)} €` : "Precio o descuento no válido.";
});
