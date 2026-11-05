# Ejercicio 1: Hola, navegador

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: Ninguno de JavaScript; conoce etiquetas HTML y selectores CSS.

## Teoría que necesitas

JavaScript añade comportamiento a una página. El navegador interpreta HTML, construye el DOM (un árbol de elementos) y ejecuta los scripts. `document.querySelector()` busca el primer elemento que coincide con un selector CSS; `#` indica un identificador. Si no existe, devuelve `null`.

El atributo `defer` permite descargar el script mientras se analiza el HTML y ejecutarlo después de construir el documento. `textContent` cambia el texto de un elemento. `console.log()` sirve para observar valores durante el desarrollo; la consola y la página son salidas distintas. Una cadena se escribe entre comillas.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const aviso = document.querySelector("#aviso");
aviso.textContent = "La página está lista";
```

## Enunciado

1. Selecciona #salida y escribe Hola, navegador con textContent.
2. Muestra JavaScript preparado en la consola.
3. Recarga y explica cuándo se ejecuta app.js.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio1/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Al cargar se ve Hola, navegador.
- La consola muestra JavaScript preparado sin errores.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio1/README.md) · [Volver al índice](../README.md)
