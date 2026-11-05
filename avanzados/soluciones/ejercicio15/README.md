# Solución original 15: Zoológico de emojis

[Enunciado y teoría](../../ejercicio15/README.md) · [Índice](../README.md)

## Lectura guiada

Una NodeList de `querySelectorAll()` permite usar `forEach()` para registrar eventos o cambiar cada elemento. El valor del callback es el elemento HTML; su índice puede relacionarlo con un array de nombres originales. No confundas la colección de nodos con los datos de los nombres.

Restaurar consiste en volver a escribir desde los datos de referencia y retirar los estilos aplicados. Si numeras tomando el texto ya numerado, acabarías acumulando prefijos. Generar siempre desde el array original hace repetible la operación.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Pulsar una tarjeta identifica su nombre y posición.
- Numerar dos veces no duplica prefijos; restablecer devuelve los nombres originales.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio15/`.
