# Ejercicio 27: Promesas: resolver y rechazar

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 26](../ejercicio26/README.md).

## Teoría que necesitas

Una promesa representa un resultado futuro. Comienza pendiente y se establece una sola vez como cumplida o rechazada. En `new Promise((resolve, reject) => ...)`, el ejecutor se llama inmediatamente; en esta simulación el temporizador entrega el resultado más tarde.

`then()` procesa el resultado, `catch()` procesa un rechazo y `finally()` ejecuta una limpieza tanto en éxito como en error. Devuelve los resultados o promesas de los callbacks cuando encadenes operaciones. Los callbacks de promesas van a la cola de microtareas cuando la promesa se establece y se ejecutan después del código síncrono actual. Una promesa por sí sola no crea un hilo ni vuelve asíncrono un cálculo costoso.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
Promise.resolve(5)
    .then((valor) => valor * 2)
    .then((doble) => console.log(doble))
    .catch((error) => console.error(error));
```

## Enunciado

1. Crea pedirTurno(fallar), que devuelva una promesa resuelta tras 600 ms con Turno 7, o rechazada con Error si fallar es true.
2. Al pulsar, muestra Cargando y desactiva el botón. Usa then para mostrar el turno y catch para el mensaje de error.
3. Reactiva el botón en finally, sin duplicar esa limpieza en los otros callbacks.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio27/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Sin marcar: Cargando y después Turno 7.
- Marcando: mensaje de error; después se puede reintentar y acertar. No hay rechazos sin gestionar en consola.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio27/README.md) · [Volver al índice](../README.md)
