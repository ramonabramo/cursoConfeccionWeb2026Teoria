# Solución original 12: El supermercado loco

[Enunciado y teoría](../../ejercicio12/README.md) · [Índice](../README.md)

## Lectura guiada

Una colección de botones puede recorrerse para asociar el mismo comportamiento a todos. Obtén el nombre del producto desde el elemento pulsado y añádelo al array del carrito. Después genera la salida a partir de ese array, en lugar de usar el DOM como almacén de datos.

Este ejercicio incluye variantes `app.js` y `app_1.js`. El navegador ejecuta el archivo enlazado en el HTML; los demás son alternativas de estudio. Compara sus decisiones en una copia si quieres probarlas sin mezclar dos implementaciones a la vez.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Cada producto pulsado se incorpora al carrito en orden.
- Pulsa el mismo producto dos veces y observa la regla original de acumulación.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio12/`.
