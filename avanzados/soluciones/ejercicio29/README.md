# Solución 29: Fetch: cargar JSON y manejar errores

[Enunciado y teoría](../../ejercicio29/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`fetch(url)` inicia una petición HTTP y devuelve una promesa con una `Response`. Un error de red puede rechazarla, pero un HTTP 404 o 500 normalmente la cumple: comprueba `response.ok` antes de leer el cuerpo. `response.json()` también devuelve una promesa y puede rechazar si el cuerpo no es JSON válido.

## Verificación

- Productos → cuatro filas; lista vacía → Sin productos.
- 404, JSON mal formado y estructura incorrecta muestran errores distintos o explicativos, sin dejar filas antiguas; después se puede reintentar.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio29/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
