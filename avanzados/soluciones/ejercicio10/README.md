# Solución original 10: La máquina del tiempo

[Enunciado y teoría](../../ejercicio10/README.md) · [Índice](../README.md)

## Lectura guiada

El inicio y el fin de un recorrido pueden proceder de campos del formulario. Convierte ambos a números antes de compararlos; las cadenas se compararían de otra manera. Un bucle desde inicio hasta fin incluido usa una condición `<=`.

Valida el orden antes de entrar al bucle. Una variable acumuladora vacía permite construir la bitácora; el separador se añade en cada vuelta según el formato pedido. Para evitar bloquear el navegador en una ampliación, limita también el tamaño del intervalo de años.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- 1980 a 1982 muestra tres años.
- Un inicio mayor que el fin produce el aviso descrito en app.js.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio10/`.
