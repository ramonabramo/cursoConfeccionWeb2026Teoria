# Solución 23: Tareas y delegación de eventos

[Enunciado y teoría](../../ejercicio23/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Los eventos de click se propagan desde el elemento pulsado hacia sus ancestros (burbujeo). La delegación coloca un único escuchador en un contenedor para atender también elementos creados después. `event.target` es el origen y `event.currentTarget` es el elemento cuyo escuchador está ejecutándose.

## Verificación

- Dos tareas con el mismo texto siguen siendo independientes.
- Completar y eliminar funcionan en tareas nuevas; pulsar el span del botón funciona; <b>prueba</b> no se interpreta como HTML.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio23/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
