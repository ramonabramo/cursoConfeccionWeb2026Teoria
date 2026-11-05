# Solución 11: Funciones para descuentos

[Enunciado y teoría](../../ejercicio11/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una función puede tener varios parámetros y un valor por defecto. Si omites el argumento correspondiente, se usa ese valor. Las funciones permiten describir una operación una sola vez y llamarla desde distintos eventos.

## Verificación

- 100 y 20 → 80.00 €; 50 y 100 → 0.00 €.
- aplicarDescuento(200) devuelve 180; -1 y 101 % se rechazan.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio11/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
