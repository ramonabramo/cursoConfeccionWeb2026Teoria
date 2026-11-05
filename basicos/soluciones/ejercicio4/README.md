# Solución 4: El ticket de la merienda

[Enunciado y teoría](../../ejercicio4/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Los operadores `+`, `-`, `*` y `/` permiten sumar, restar, multiplicar y dividir. Los paréntesis expresan el orden de un cálculo. Un porcentaje del 10 % se representa como `0.10`: primero calcula la base y después el recargo.

## Verificación

- 3 unidades a 2.50 €: base 7.50, IVA 0.75, total 8.25.
- Rechaza cantidad 0, 1.5 y precios negativos; admite precio 0.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio4/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
