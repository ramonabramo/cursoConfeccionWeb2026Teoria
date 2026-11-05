# Ejercicio 28: Async/await: secuencia y concurrencia

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 27](../ejercicio27/README.md).

## Teoría que necesitas

Una función `async` siempre devuelve una promesa. `await` suspende esa función hasta obtener el resultado de una promesa, sin bloquear la interfaz. Usa `try/catch/finally` para manejar fallos y limpiar el estado de la UI, igual que con las cadenas de promesas.

Dos `await` consecutivos inician tareas en secuencia si las creas en cada línea. `Promise.all([tareaA(), tareaB()])` inicia ambas y espera sus resultados en el orden de entrada. Esto es concurrencia de operaciones asíncronas; no convierte el código JavaScript en cálculo paralelo. Si una falla, Promise.all rechaza y no cancela automáticamente las restantes. Usa concurrencia solo para tareas independientes.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const [usuario, cursos] = await Promise.all([cargarUsuario(), cargarCursos()]);
```

## Enunciado

1. Simula dos tareas independientes de 400 y 700 ms que devuelvan Perfil y Cursos.
2. Implementa ejecutar(modo) async: secuencial con dos await o concurrente con Promise.all.
3. Muestra resultados y tiempo con performance.now. Desactiva ambos botones durante la espera y usa try/catch/finally.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio28/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Secuencia tarda aproximadamente 1100 ms; Promise.all aproximadamente 700 ms (puede tardar más según el navegador).
- Al fallar la segunda tarea se muestra un error y ambos botones se reactivan.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio28/README.md) · [Volver al índice](../README.md)
