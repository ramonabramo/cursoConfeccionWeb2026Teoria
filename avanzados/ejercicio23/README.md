# Ejercicio 23: Tareas y delegación de eventos

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 22](../ejercicio22/README.md).

## Teoría que necesitas

Los eventos de click se propagan desde el elemento pulsado hacia sus ancestros (burbujeo). La delegación coloca un único escuchador en un contenedor para atender también elementos creados después. `event.target` es el origen y `event.currentTarget` es el elemento cuyo escuchador está ejecutándose.

`closest("button[data-accion]")` encuentra el botón aunque se pulse un icono o un span dentro de él. `dataset` permite leer atributos `data-*` como cadenas. Guarda identificadores estables en los datos, en lugar de usar el texto o la posición como identidad. Después de cada cambio vuelve a presentar la lista a partir del estado. `textContent` permite mostrar literalmente los textos introducidos.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
lista.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button[data-id]");
    if (!boton) return;
    console.log(boton.dataset.id);
});
```

## Enunciado

1. Guarda tareas como objetos { id, texto, completada }; usa un contador para crear ids que no se reutilicen durante la sesión.
2. Genera botones con data-id y data-accion para completar o eliminar. Usa un solo click en #lista.
3. Permite añadir con Enter, rechaza textos vacíos y actualiza el total de pendientes.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio23/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Dos tareas con el mismo texto siguen siendo independientes.
- Completar y eliminar funcionan en tareas nuevas; pulsar el span del botón funciona; <b>prueba</b> no se interpreta como HTML.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio23/README.md) · [Volver al índice](../README.md)
