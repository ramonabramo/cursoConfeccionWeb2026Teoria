# Solución 1: Hola, navegador

[Enunciado y teoría](../../ejercicio1/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

JavaScript añade comportamiento a una página. El navegador interpreta HTML, construye el DOM (un árbol de elementos) y ejecuta los scripts. `document.querySelector()` busca el primer elemento que coincide con un selector CSS; `#` indica un identificador. Si no existe, devuelve `null`.

## Verificación

- Al cargar se ve Hola, navegador.
- La consola muestra JavaScript preparado sin errores.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio1/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
