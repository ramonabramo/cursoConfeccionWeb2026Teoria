# Solución original 14: La cesta de frutas

[Enunciado y teoría](../../ejercicio14/README.md) · [Índice](../README.md)

## Lectura guiada

`forEach()` recorre los elementos existentes y llama a una función con cada valor. Su segundo parámetro es el índice desde cero; para numerar para una persona suele mostrarse `indice + 1`. El método devuelve `undefined`, no una nueva lista transformada.

Para producir una salida puedes concatenar en un acumulador y escribir al final. Un salto de línea `\n` es un carácter de la cadena; su aspecto en pantalla depende de cómo trate el CSS los espacios. Compara una salida simple con una numerada y reutiliza la misma colección.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Mostrar recorre las cinco frutas; numerar empieza en 1.
- Limpiar recupera la salida inicial y no borra el array de datos.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio14/`.
