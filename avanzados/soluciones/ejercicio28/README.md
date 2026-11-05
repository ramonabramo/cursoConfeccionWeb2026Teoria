# Solución 28: Async/await: secuencia y concurrencia

[Enunciado y teoría](../../ejercicio28/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una función `async` siempre devuelve una promesa. `await` suspende esa función hasta obtener el resultado de una promesa, sin bloquear la interfaz. Usa `try/catch/finally` para manejar fallos y limpiar el estado de la UI, igual que con las cadenas de promesas.

## Verificación

- Secuencia tarda aproximadamente 1100 ms; Promise.all aproximadamente 700 ms (puede tardar más según el navegador).
- Al fallar la segunda tarea se muestra un error y ambos botones se reactivan.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio28/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
