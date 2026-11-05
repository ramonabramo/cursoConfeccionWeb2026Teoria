# Solución 18: Estadísticas de números

[Enunciado y teoría](../../ejercicio18/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Un acumulador conserva un resultado parcial durante un recorrido. Para sumar empieza en cero; para buscar un máximo o mínimo empieza con el primer elemento, no con cero, porque todos los valores podrían ser negativos o positivos.

## Verificación

- 2, 4 y 6 → suma 12, media 4.00, mínimo 2 y máximo 6.
- -8 y -2 → máximo -2; reiniciar muestra Sin datos.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio18/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
