# Solución original 4: Colección de párrafos

[Enunciado y teoría](../../ejercicio4/README.md) · [Índice](../README.md)

## Lectura guiada

Un selector de etiqueta como `p` selecciona todos los párrafos del documento. Cada posición de la colección contiene un elemento, no su texto: primero accedes al elemento y después a `textContent`. Un índice fuera de la colección produce `undefined`.

La función del evento puede compartirse entre varios párrafos. Esta práctica transforma el ejercicio 1 para trabajar con una colección. El selector debe representar exactamente los elementos que quieras escuchar; añadir más párrafos al HTML puede cambiar la colección.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Pulsa los tres párrafos y comprueba que cada uno actualiza la salida.
- Explica por qué el primer índice es 0 y no 1.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio4/`.
