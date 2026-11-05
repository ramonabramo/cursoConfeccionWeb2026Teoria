# Solución 27: Promesas: resolver y rechazar

[Enunciado y teoría](../../ejercicio27/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una promesa representa un resultado futuro. Comienza pendiente y se establece una sola vez como cumplida o rechazada. En `new Promise((resolve, reject) => ...)`, el ejecutor se llama inmediatamente; en esta simulación el temporizador entrega el resultado más tarde.

## Verificación

- Sin marcar: Cargando y después Turno 7.
- Marcando: mensaje de error; después se puede reintentar y acertar. No hay rechazos sin gestionar en consola.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio27/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
