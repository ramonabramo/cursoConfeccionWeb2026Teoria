# Solución original 14base: Del for a forEach

[Enunciado y teoría](../../ejercicio14base/README.md) · [Índice](../README.md)

## Lectura guiada

`forEach(callback)` invoca el callback para cada elemento. Recibe el valor y opcionalmente el índice. No permite salir con `break`: un `return` sale solo de ese callback. Usa `for`, `for...of`, `find()` o `some()` si necesitas otra forma de control. Ningún recorrido es universalmente mejor.

El original ejecuta los dos ejemplos (for y forEach) y registra los dos grupos de escuchadores. Por eso algunos resultados o avisos se repiten: son ejemplos de comparación, no dos pasos que deban copiarse juntos a una aplicación final. Se conserva esta variante para estudiarla.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Localiza qué salidas provienen del for y cuáles de forEach.
- Explica por qué un mismo enlace puede provocar dos avisos en el ejemplo original.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio14base/`.
