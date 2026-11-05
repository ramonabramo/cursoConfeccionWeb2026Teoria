function diaUTC(fecha) {
    return Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}
document.querySelector("#calcular").addEventListener("click", () => {
    const valor = document.querySelector("#fecha").value;
    const fecha = new Date(`${valor}T00:00:00`);
    const salida = document.querySelector("#salida");
    if (!valor || !Number.isFinite(fecha.getTime())) { salida.textContent = "Selecciona una fecha válida."; return; }
    const dias = Math.round((diaUTC(fecha) - diaUTC(new Date())) / 86400000);
    const texto = dias === 0 ? "Hoy" : dias > 0 ? `Faltan ${dias} días` : `Pasaron ${Math.abs(dias)} días`;
    const formato = new Intl.DateTimeFormat("es-ES", { dateStyle: "long" });
    salida.textContent = `${formato.format(fecha)}: ${texto}`;
});
