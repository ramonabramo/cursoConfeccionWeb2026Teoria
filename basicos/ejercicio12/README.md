# Ejercicio 12: Laboratorio de texto

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 11](../ejercicio11/README.md).

## Teoría que necesitas

Las cadenas tienen propiedades como `.length` y métodos como `.trim()`, `.toUpperCase()` y `.toLowerCase()`. Los métodos devuelven nuevas cadenas: no cambian la original. `trim()` elimina espacios al principio y al final, sin quitar los del interior.

El evento `input` se dispara al editar el contenido, también al pegar texto. Es más adecuado para una vista en directo que escuchar únicamente teclas. En esta práctica contamos la longitud de la cadena recortada. `.length` cuenta unidades UTF-16: algunos emojis ocupan más de una, así que no equivale siempre a los caracteres que percibimos visualmente.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const texto = "  hola mundo  ";
console.log(texto.trim().toUpperCase()); // HOLA MUNDO
```

## Enunciado

1. Escucha input en #texto y actualiza también al cargar.
2. Obtén la versión recortada, su longitud y las versiones en mayúsculas y minúsculas.
3. Muestra las tres salidas con textContent, sin interpretar etiquetas HTML.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio12/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

-   Hola  → longitud 4, HOLA y hola.
- Vacío → longitud 0; <b>hola</b> se ve como texto literal.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio12/README.md) · [Volver al índice](../README.md)
