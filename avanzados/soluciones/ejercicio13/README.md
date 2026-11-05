# Solución original 13: La pizzería del chef

[Enunciado y teoría](../../ejercicio13/README.md) · [Índice](../README.md)

## Lectura guiada

`push()` añade al final, `pop()` devuelve y elimina el último elemento, y asignar `length = 0` vacía un array conservando la misma referencia. Después de cada cambio hay que actualizar tanto la lista como su contador.

Las operaciones sobre una colección vacía necesitan un mensaje adecuado. Hornear no tiene el mismo significado que añadir: consulta el estado y decide si la acción está permitida. El original incluye instrucciones detalladas en app.js y una variante adicional en la carpeta de soluciones.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Añadir, quitar y vaciar mantienen sincronizados contador y contenido.
- Hornear una pizza vacía informa del problema; con ingredientes muestra el resumen.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio13/`.
