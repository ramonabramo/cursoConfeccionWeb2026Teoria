# Solución 2: Mi ficha con variables

[Enunciado y teoría](../../ejercicio2/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una variable da nombre a un valor. Usa `const` cuando no vayas a reasignar ese nombre y `let` cuando el valor vaya a cambiar. Una cadena (`string`), un número (`number`) y un booleano (`boolean`) representan información diferente. `typeof` permite consultar el tipo de un valor.

## Verificación

- La edad final es 21 y su tipo es number.
- estudiante es boolean, no la cadena "true".

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio2/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
