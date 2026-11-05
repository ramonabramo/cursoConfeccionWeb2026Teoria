# Solución original 11: Párrafos y celdas con salidas distintas

[Enunciado y teoría](../../ejercicio11/README.md) · [Índice](../README.md)

## Lectura guiada

Un bucle puede registrar eventos en cada elemento de una colección. La función registrada no se ejecuta durante el registro, sino en cada interacción posterior. Usa `let` para un contador de bloque cuando debas capturar su valor en un callback.

Asignar con `=` sustituye la salida; `+=` concatena con lo que ya había. En este ejercicio los párrafos y las celdas tienen reglas diferentes y contenedores de salida distintos. Identificar esos dos flujos ayuda a evitar que una acción modifique el panel equivocado.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Los párrafos muestran solo el último texto pulsado en su salida.
- Las celdas concatenan en el otro panel sin cambiar el de los párrafos.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio11/`.
