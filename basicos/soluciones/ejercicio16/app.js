const materiales = ["Cuaderno", "Lápiz", "Regla"];
document.querySelector("#mostrar").addEventListener("click", () => {
    const lista = document.querySelector("#lista");
    lista.replaceChildren();
    for (const material of materiales) {
        const li = document.createElement("li");
        li.textContent = material;
        lista.append(li);
    }
    document.querySelector("#salida").textContent = `Cantidad: ${materiales.length}; primero: ${materiales[0]}; último: ${materiales[materiales.length - 1]}`;
});
