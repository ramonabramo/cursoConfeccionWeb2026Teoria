# Ejercicio 19: Formulario de inscripción

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 18](../ejercicio18/README.md).

## Teoría que necesitas

Los formularios emiten `submit` al enviar mediante un botón o con Enter. `event.preventDefault()` evita la navegación por defecto y permite procesar los datos en cliente. Escuchar únicamente el click del botón deja fuera otras formas de envío.

HTML ofrece validación con `required`, `type="email"` y límites numéricos. Con `novalidate` podemos demostrar su consulta explícita mediante `reportValidity()`. Complementa esas restricciones con reglas de JavaScript, como rechazar nombres formados por espacios. Usa mensajes de texto, conserva los datos cuando hay errores y no muestres contraseñas ni información innecesaria.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Validar y procesar sin recargar.
});
```

## Enunciado

1. Escucha submit, evita la recarga y recorta nombre y correo.
2. Valida nombre de al menos dos caracteres y usa reportValidity para correo y aceptación.
3. Muestra Inscripción de NOMBRE recibida: CORREO; esta simulación no envía datos a ningún servidor.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio19/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Ana, ana@example.com y aceptación → confirmación sin recarga.
- Nombre con espacios, email sin @ o casilla sin marcar no confirman; Enter también envía.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio19/README.md) · [Volver al índice](../README.md)
