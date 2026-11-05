# Solución 7: Pares e impares

[Enunciado y teoría](../../ejercicio7/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

El operador `%` obtiene el resto de una división. Un entero es par cuando su resto al dividir entre dos es cero. Esto funciona también con cero y con enteros negativos. Para comparar usa `===`, que comprueba igualdad sin convertir tipos; `=` asigna un valor.

## Verificación

- 0 y -4 son pares; -3 y 7 son impares.
- 2.5 y vacío muestran Introduce un entero.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio7/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
