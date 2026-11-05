function tarea(nombre, demora, fallar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => fallar ? reject(new Error(`Fallo en ${nombre}`)) : resolve(nombre), demora);
    });
}
const botones = [document.querySelector("#secuencial"), document.querySelector("#concurrente")];
async function ejecutar(modo) {
    const salida = document.querySelector("#salida");
    const fallar = document.querySelector("#fallar").checked;
    botones.forEach((boton) => { boton.disabled = true; });
    salida.textContent = "Trabajando… Puedes seguir interactuando con la página.";
    const inicio = performance.now();
    try {
        let resultados;
        if (modo === "secuencial") {
            const perfil = await tarea("Perfil", 400);
            const cursos = await tarea("Cursos", 700, fallar);
            resultados = [perfil, cursos];
        } else {
            resultados = await Promise.all([tarea("Perfil", 400), tarea("Cursos", 700, fallar)]);
        }
        salida.textContent = `${resultados.join(" + ")}: ${Math.round(performance.now() - inicio)} ms`;
    } catch (error) {
        salida.textContent = error.message;
    } finally {
        botones.forEach((boton) => { boton.disabled = false; });
    }
}
botones[0].addEventListener("click", () => ejecutar("secuencial"));
botones[1].addEventListener("click", () => ejecutar("concurrente"));
