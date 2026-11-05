# Ejercicio 13: Un panel que cambia

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 12](../ejercicio12/README.md).

## Teoría que necesitas

`classList` permite añadir, quitar y alternar clases CSS sin reescribir estilos. `toggle("clase")` activa la clase si no está y la quita si ya existe; devuelve si ha quedado activa. La propiedad `hidden` controla si se muestra un elemento.

El estado visual debe comunicarse también mediante el texto y los atributos apropiados. Un botón que alterna una opción usa `aria-pressed`; uno que despliega un panel usa `aria-expanded` y `aria-controls`. Los botones nativos se pueden accionar con teclado sin añadir manejadores especiales.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const activo = tarjeta.classList.toggle("destacado");
boton.setAttribute("aria-pressed", String(activo));
```

## Enunciado

1. Alterna la clase destacado del panel con #destacar y actualiza aria-pressed.
2. Alterna panel.hidden con #visibilidad.
3. Actualiza su texto (Mostrar/Ocultar panel), aria-expanded y un mensaje de estado.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio13/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Dos pulsaciones en Destacar recuperan el estilo inicial.
- Ocultar quita el panel; Mostrar lo devuelve; funciona con Tab y Enter.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio13/README.md) · [Volver al índice](../README.md)
