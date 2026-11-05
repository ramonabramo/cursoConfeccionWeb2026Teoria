# Solución 12: Laboratorio de texto

[Enunciado y teoría](../../ejercicio12/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Las cadenas tienen propiedades como `.length` y métodos como `.trim()`, `.toUpperCase()` y `.toLowerCase()`. Los métodos devuelven nuevas cadenas: no cambian la original. `trim()` elimina espacios al principio y al final, sin quitar los del interior.

## Verificación

-   Hola  → longitud 4, HOLA y hola.
- Vacío → longitud 0; <b>hola</b> se ve como texto literal.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio12/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
