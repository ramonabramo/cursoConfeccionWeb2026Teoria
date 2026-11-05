# Ejercicio 30: Búsqueda, URL y cancelación de fetch

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 29](../ejercicio29/README.md).

## Teoría que necesitas

`AbortController` proporciona una señal para cancelar una petición: pásala como `{ signal: controlador.signal }` a fetch y llama a `.abort()` para cancelarla. La promesa puede rechazar con un error cuyo nombre es `AbortError`. Si el servidor ya respondió, abortar no deshace lo que haya ejecutado el servidor.

Al buscar varias veces, una respuesta antigua podría llegar después de una nueva. Cancela la anterior y comprueba que cada callback pertenece todavía a la petición actual antes de modificar la UI. `URLSearchParams` lee y codifica parámetros; `history.replaceState()` permite actualizar la URL sin recargar. Aquí la búsqueda filtra en cliente un JSON local: no fingimos que el servidor implemente un buscador.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const controlador = new AbortController();
const respuesta = await fetch("datos/libros.json", { signal: controlador.signal });
// Desde otro evento: controlador.abort();
```

## Enunciado

1. Lee q de la URL como búsqueda inicial; al enviar, actualiza q con URLSearchParams y replaceState.
2. En cada búsqueda carga datos/libros.json, valida los títulos y filtra sin distinguir mayúsculas. Muestra la lista y el total.
3. Cancela la petición anterior al iniciar otra. Implementa cancelar y evita que respuestas antiguas modifiquen resultados o botones de la actual.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML. Los archivos auxiliares indicados en el código también forman parte de la práctica.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio30/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Buscar JavaScript → dos títulos; xyz → Sin resultados. ?q=HTML recupera la búsqueda al recargar y enviar.
- En DevTools, limita la red (Network → throttling) para poder cancelar o lanzar dos búsquedas seguidas. La última búsqueda conserva el control de la interfaz.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio30/README.md) · [Volver al índice](../README.md)
