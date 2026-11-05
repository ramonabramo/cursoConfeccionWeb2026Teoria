# Solución 6: Control de edad

[Enunciado y teoría](../../ejercicio6/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una condición produce `true` o `false`. `if` ejecuta un bloque si la condición es verdadera y `else` ofrece una alternativa. `>=` incluye el límite; `>` lo excluye. Las llaves delimitan cada bloque.

## Verificación

- 17 es menor; 18 es mayor; 0 es una edad válida.
- -1, 121, 18.5 y vacío muestran Edad no válida.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio6/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
