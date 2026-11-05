function celsiusAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
document.querySelector("#convertir").addEventListener("click", () => {
    const celsius = document.querySelector("#celsius").valueAsNumber;
    document.querySelector("#salida").textContent = Number.isFinite(celsius)
        ? `${celsiusAFahrenheit(celsius).toFixed(1)} °F` : "Introduce una temperatura válida.";
});
