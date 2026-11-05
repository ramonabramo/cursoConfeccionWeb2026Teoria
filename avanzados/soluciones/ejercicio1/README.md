# Solución original 1: Leer el párrafo pulsado

[Enunciado y teoría](../../ejercicio1/README.md) · [Índice](../README.md)

## Lectura guiada

El DOM representa cada etiqueta como un objeto. `querySelector("#parrafo1")` localiza un elemento por id. Al registrar `addEventListener("click", mostrar)` pasas una referencia a la función, sin ejecutarla todavía. El navegador le entregará el objeto evento al producirse el click.

`evento.target` identifica el origen del evento y `textContent` lee o escribe texto sin interpretar HTML. Una misma función puede atender varios elementos. El resultado sustituye el texto anterior si asignas con `=`.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Pulsa los tres párrafos y observa que la salida corresponde al último pulsado.
- Relaciona cada referencia del DOM con el escuchador que utiliza la misma función.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio1/`.
