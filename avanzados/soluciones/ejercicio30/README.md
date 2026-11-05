# Solución 30: Búsqueda, URL y cancelación de fetch

[Enunciado y teoría](../../ejercicio30/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`AbortController` proporciona una señal para cancelar una petición: pásala como `{ signal: controlador.signal }` a fetch y llama a `.abort()` para cancelarla. La promesa puede rechazar con un error cuyo nombre es `AbortError`. Si el servidor ya respondió, abortar no deshace lo que haya ejecutado el servidor.

## Verificación

- Buscar JavaScript → dos títulos; xyz → Sin resultados. ?q=HTML recupera la búsqueda al recargar y enviar.
- En DevTools, limita la red (Network → throttling) para poder cancelar o lanzar dos búsquedas seguidas. La última búsqueda conserva el control de la interfaz.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio30/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
