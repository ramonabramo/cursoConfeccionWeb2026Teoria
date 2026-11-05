# Ejercicio 7: Pares e impares

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 6](../ejercicio6/README.md).

## Teoría que necesitas

El operador `%` obtiene el resto de una división. Un entero es par cuando su resto al dividir entre dos es cero. Esto funciona también con cero y con enteros negativos. Para comparar usa `===`, que comprueba igualdad sin convertir tipos; `=` asigna un valor.

No todo número es un entero: rechaza decimales para que par e impar tengan sentido. El operador ternario `condicion ? valorA : valorB` es útil para elegir entre dos expresiones cortas. Puedes resolver primero con `if` y después comparar ambas formas.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const esMultiploDeTres = 12 % 3 === 0; // true
```

## Enunciado

1. Lee un entero y rechaza los decimales o el campo vacío.
2. Calcula numero % 2 y compara estrictamente con 0.
3. Muestra Par o Impar.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio7/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 0 y -4 son pares; -3 y 7 son impares.
- 2.5 y vacío muestran Introduce un entero.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio7/README.md) · [Volver al índice](../README.md)
