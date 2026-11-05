# Solución 26: Temporizadores y bucle de eventos

[Enunciado y teoría](../../ejercicio26/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

JavaScript ejecuta cada bloque síncrono hasta terminar. `setTimeout(callback, demora)` programa una tarea para más adelante; incluso con demora cero, no interrumpe el código actual. El tiempo indicado es un mínimo aproximado, no una garantía de ejecución exacta. `setInterval()` programa repeticiones y devuelve un identificador que puedes cancelar con `clearInterval()`.

## Verificación

- 3 segundos termina cerca de 3 segundos sin bloquear la página.
- No puedes iniciar intervalos duplicados; cancelar detiene la cuenta y permite empezar otra.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio26/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
