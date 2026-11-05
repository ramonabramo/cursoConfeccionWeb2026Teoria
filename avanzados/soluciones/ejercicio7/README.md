# Solución original 7: Radar espacial

[Enunciado y teoría](../../ejercicio7/README.md) · [Índice](../README.md)

## Lectura guiada

Un bucle `for` combina contador, condición y actualización. Para generar N elementos puedes empezar en cero y repetir mientras el contador sea menor que N. Si empiezas en uno, la condición debe incluir N. No mezcles ambas convenciones.

Acumula las representaciones en una variable y muestra el resultado después del bucle. Valida el entero y los límites del campo para evitar trabajo excesivo o bucles mal definidos. El HTML orienta al usuario, pero la lógica también debe comprobar lo que necesita.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Solicita 1 y después 5 naves: la cantidad dibujada coincide.
- Repite la acción y comprueba si se sustituye la salida según el enunciado original.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio7/`.
