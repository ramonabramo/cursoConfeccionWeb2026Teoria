# Ejercicio 18: Estadísticas de números

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 17](../ejercicio17/README.md).

## Teoría que necesitas

Un acumulador conserva un resultado parcial durante un recorrido. Para sumar empieza en cero; para buscar un máximo o mínimo empieza con el primer elemento, no con cero, porque todos los valores podrían ser negativos o positivos.

La media es suma dividida entre cantidad. Un array vacío no tiene media, mínimo ni máximo en este ejercicio, así que hay que tratarlo por separado. Divide el programa en entrada, cálculo y salida. Puedes recorrer el array con `for...of` y actualizar los tres acumuladores en una sola pasada.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
let suma = 0;
for (const numero of [2, 4, 6]) {
    suma += numero;
}
```

## Enunciado

1. Guarda números finitos en un array, admitiendo cero y negativos.
2. Calcula suma, media, mínimo y máximo mediante un recorrido.
3. Presenta la media con dos decimales; muestra Sin datos si está vacío.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio18/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 2, 4 y 6 → suma 12, media 4.00, mínimo 2 y máximo 6.
- -8 y -2 → máximo -2; reiniciar muestra Sin datos.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio18/README.md) · [Volver al índice](../README.md)
