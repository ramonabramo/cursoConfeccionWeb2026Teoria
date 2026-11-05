# Solución original 9: La Megaburger

[Enunciado y teoría](../../ejercicio9/README.md) · [Índice](../README.md)

## Lectura guiada

`trim()` devuelve una cadena sin espacios exteriores. Si el resultado es vacío, la entrada no aporta un ingrediente. `push()` modifica el array; `length` consulta su número de elementos. Ambas operaciones deben realizarse sobre la misma colección que representa la hamburguesa.

Cuando muestres datos escritos por el usuario, `textContent` es la opción directa para tratarlos como texto. Los ingredientes predefinidos ya forman parte del array y cuentan en la longitud. Lee la inicialización del original para calcular correctamente el número esperado.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Añade un ingrediente con espacios exteriores: se guarda recortado.
- Medir cuenta también los elementos iniciales; una entrada de espacios no aumenta la cuenta.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio9/`.
