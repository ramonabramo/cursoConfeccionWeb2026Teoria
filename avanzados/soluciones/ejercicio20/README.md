# Solución original 20: TechStore con lightbox

[Enunciado y teoría](../../ejercicio20/README.md) · [Índice](../README.md)

## Lectura guiada

Descomponer una interfaz en funciones permite separar formateo, cálculo de cuota, renderizado y apertura o cierre del detalle. El índice del producto enlaza la tarjeta con sus datos mientras se mantienen los arrays paralelos del original.

Una ventana modal debe ofrecer una forma clara de cerrarse. En una mejora de accesibilidad también se gestiona el foco, Escape y el retorno al elemento que abrió el detalle. Conservamos el código original: lee sus tareas para distinguir lo ya implementado y lo que queda por completar. Los nuevos ejercicios presentan alternativas con objetos, módulos y DOM seguro.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Las diez tarjetas muestran datos coherentes y abren el detalle del producto pulsado.
- Comprueba las formas de cierre previstas en el original y el cálculo de la cuota.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio20/`.
