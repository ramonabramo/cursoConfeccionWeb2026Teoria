# Solución original 6: Guardar números y acumular su suma

[Enunciado y teoría](../../ejercicio6/README.md) · [Índice](../README.md)

## Lectura guiada

Los campos proporcionan cadenas en `.value`; conviértelas antes de sumar. Un array guarda los números introducidos y un acumulador conserva el total parcial durante el recorrido. Inicializa la suma a cero cada vez que la vuelvas a calcular.

`join()` presenta el contenido sin confundir la representación visual con el array. Las clases `oculto` y `con-datos` separan el estado visual de los datos. El código original es una plantilla con pasos pendientes: identifica sus referencias al DOM antes de completar el evento.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Añade 2 y 3: la lista contiene ambos y la suma es 5.
- Comprueba que el panel de resultados se hace visible al añadir datos.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio6/`.
