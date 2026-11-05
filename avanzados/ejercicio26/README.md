# Ejercicio 26: Temporizadores y bucle de eventos

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 25](../ejercicio25/README.md).

## Teoría que necesitas

JavaScript ejecuta cada bloque síncrono hasta terminar. `setTimeout(callback, demora)` programa una tarea para más adelante; incluso con demora cero, no interrumpe el código actual. El tiempo indicado es un mínimo aproximado, no una garantía de ejecución exacta. `setInterval()` programa repeticiones y devuelve un identificador que puedes cancelar con `clearInterval()`.

Evita crear varios intervalos para una sola cuenta atrás. Para medir el tiempo transcurrido usa `performance.now()`, cuyo reloj es monotónico, y calcula lo restante desde una fecha límite. Restar uno en cada callback acumularía retrasos si la pestaña queda en segundo plano. Las funciones registradas recuerdan las variables de su ámbito: es un ejemplo de cierre o closure.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C"); // orden: A, C, B
```

## Enunciado

1. Crea una cuenta atrás de 1 a 10 segundos, actualizada con un único intervalo.
2. Calcula lo restante con performance.now; al llegar a cero libera el intervalo y muestra Tiempo terminado.
3. Permite cancelar y volver a empezar; demuestra el orden A, C, B con setTimeout en consola.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio26/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 3 segundos termina cerca de 3 segundos sin bloquear la página.
- No puedes iniciar intervalos duplicados; cancelar detiene la cuenta y permite empezar otra.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio26/README.md) · [Volver al índice](../README.md)
