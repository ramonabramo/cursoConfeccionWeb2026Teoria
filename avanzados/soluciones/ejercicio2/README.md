# Solución original 2: Leer una celda

[Enunciado y teoría](../../ejercicio2/README.md) · [Índice](../README.md)

## Lectura guiada

Las celdas de una tabla también son elementos del DOM. Puedes capturarlas por id y registrar una misma función en todas. El parámetro del manejador es un objeto evento, no el texto de la celda. Para obtener el texto hay que acceder a la propiedad del elemento.

Seleccionar un elemento y escuchar un evento son acciones distintas. Una referencia no reacciona sola. Comprueba que cada selector encuentra el elemento previsto y que el script se ejecuta después de construir el HTML.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Pulsa una celda de texto y otra numérica: ambas se muestran como texto.
- Comprueba que la salida sustituye el contenido anterior.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio2/`.
