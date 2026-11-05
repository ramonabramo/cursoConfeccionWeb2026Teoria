# Ejercicio 29: Fetch: cargar JSON y manejar errores

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 28](../ejercicio28/README.md).

## Teoría que necesitas

`fetch(url)` inicia una petición HTTP y devuelve una promesa con una `Response`. Un error de red puede rechazarla, pero un HTTP 404 o 500 normalmente la cumple: comprueba `response.ok` antes de leer el cuerpo. `response.json()` también devuelve una promesa y puede rechazar si el cuerpo no es JSON válido.

Recibir JSON válido no garantiza su estructura. Verifica que sea un array de productos con campos válidos antes de generar la interfaz. Representa los estados inicial, carga, éxito, vacío y error. Usa HTTP local: abrir el archivo con `file://` no ofrece el mismo origen ni un servidor que atienda las peticiones. Los datos incluidos permiten practicar sin conexión a Internet.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const respuesta = await fetch("datos.json");
if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
const datos = await respuesta.json();
```

## Enunciado

1. Carga el archivo elegido con fetch, comprueba response.ok y espera response.json().
2. Valida un array de objetos con nombre string y precio finito no negativo; renderiza con createElement y textContent.
3. Limpia resultados previos, muestra los estados y reactiva el botón en finally.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML. Los archivos auxiliares indicados en el código también forman parte de la práctica.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio29/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Productos → cuatro filas; lista vacía → Sin productos.
- 404, JSON mal formado y estructura incorrecta muestran errores distintos o explicativos, sin dejar filas antiguas; después se puede reintentar.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio29/README.md) · [Volver al índice](../README.md)
