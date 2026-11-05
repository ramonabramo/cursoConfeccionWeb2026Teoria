const preguntas = ["¿Qué palabra declara una constante?", "¿En qué índice empieza un array?", "¿Qué evento usamos para una pulsación de botón con ratón?"];
const respuestas = ["const", "0", "click"];
let indice = 0;
let aciertos = 0;
const entrada = document.querySelector("#respuesta");
const responder = document.querySelector("#responder");
const salida = document.querySelector("#salida");
function mostrarPregunta() {
    document.querySelector("#pregunta").textContent = `${indice + 1}. ${preguntas[indice]}`;
    entrada.value = "";
    entrada.focus();
}
document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (indice >= preguntas.length) return;
    const respuesta = entrada.value.trim().toLowerCase();
    if (respuesta === "") {
        salida.textContent = "Escribe una respuesta.";
        return;
    }
    if (respuesta === respuestas[indice]) aciertos += 1;
    indice += 1;
    if (indice === preguntas.length) {
        document.querySelector("#pregunta").textContent = "Cuestionario terminado";
        salida.textContent = `Aciertos: ${aciertos} de ${preguntas.length}`;
        responder.disabled = true;
        entrada.disabled = true;
    } else {
        salida.textContent = `Respuestas completadas: ${indice}`;
        mostrarPregunta();
    }
});
document.querySelector("#reiniciar").addEventListener("click", () => {
    indice = 0;
    aciertos = 0;
    responder.disabled = false;
    entrada.disabled = false;
    salida.textContent = "Empieza de nuevo.";
    mostrarPregunta();
});
mostrarPregunta();
