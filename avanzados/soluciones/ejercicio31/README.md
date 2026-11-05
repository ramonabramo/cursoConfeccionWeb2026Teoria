# Solución 31: Módulos y clases: un carrito

[Enunciado y teoría](../../ejercicio31/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Los módulos nativos usan `export` e `import` y se cargan con `<script type="module">`. Cada módulo tiene su propio ámbito, se ejecuta en modo estricto y sus declaraciones no se convierten en variables globales de window. Escribe rutas relativas con extensión, como `./carrito.js`, y sirve los archivos por HTTP con un tipo MIME de JavaScript.

## Verificación

- Añadir Teclado y Ratón → 2 unidades y total 45,00 €; vaciar → 0 unidades.
- Una instancia rechaza precio negativo. Modificar el objeto original tras agregar no cambia el precio guardado. No aparecen variables de módulos en window.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio31/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
