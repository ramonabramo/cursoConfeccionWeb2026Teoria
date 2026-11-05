# Solución original 16: Sala de cine

[Enunciado y teoría](../../ejercicio16/README.md) · [Índice](../README.md)

## Lectura guiada

Una reserva tiene dos representaciones: los datos de butacas ocupadas y la clase CSS de cada butaca. Si actualizas solo una, la interfaz se contradice. Centraliza las operaciones o vuelve a renderizar desde los datos para mantenerlas sincronizadas.

`classList.contains()` consulta una clase; `add()` y `remove()` cambian su presencia. Para retirar un dato puedes usar `indexOf()` y `splice()`, o crear otro array con `filter()`. No asignes un array nuevo a una variable declarada con const; en ese caso modifica su contenido o utiliza let para la referencia.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Una butaca alterna reserva y liberación sin duplicarse en los datos.
- Ocupar todas, listar y liberar todas mantienen contador y clases coherentes.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio16/`.
