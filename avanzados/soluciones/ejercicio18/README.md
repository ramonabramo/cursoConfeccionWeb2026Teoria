# Solución original 18: DJ Studio: master playlist

[Enunciado y teoría](../../ejercicio18/README.md) · [Índice](../README.md)

## Lectura guiada

`unshift()` y `shift()` añaden y quitan al principio; `push()` y `pop()` lo hacen al final. `includes()` responde si existe un valor y `indexOf()` devuelve su posición o -1. La comparación de cadenas distingue mayúsculas, por lo que debes conocer la regla de búsqueda del programa.

Una función declarada con nombre expresa una responsabilidad y se puede llamar desde varios botones. Separa añadir, buscar, quitar y presentar para evitar duplicar cambios de contador. Usa una única colección como estado y contempla el caso vacío en las operaciones de eliminación.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Añadir al principio y al final conserva el orden previsto.
- Buscar, quitar de ambos extremos y vaciar actualizan lista y contador sin errores en vacío.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio18/`.
