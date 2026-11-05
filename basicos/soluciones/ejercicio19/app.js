const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const salida = document.querySelector("#salida");
    nombre.value = nombre.value.trim();
    email.value = email.value.trim();
    if (nombre.value.length < 2) {
        salida.textContent = "El nombre debe tener al menos dos caracteres.";
        nombre.focus();
        return;
    }
    if (!formulario.reportValidity()) {
        salida.textContent = "Revisa el correo y la aceptación.";
        return;
    }
    salida.textContent = `Inscripción de ${nombre.value} recibida: ${email.value}`;
});
