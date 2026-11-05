# Ejercicio 4: El ticket de la merienda

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 3](../ejercicio3/README.md).

## Teoría que necesitas

Los operadores `+`, `-`, `*` y `/` permiten sumar, restar, multiplicar y dividir. Los paréntesis expresan el orden de un cálculo. Un porcentaje del 10 % se representa como `0.10`: primero calcula la base y después el recargo.

Los números de JavaScript usan coma flotante binaria y algunas fracciones decimales se aproximan. `toFixed(2)` presenta dos decimales y devuelve una cadena, apropiada para mostrar el resultado. No redondees cada paso sin necesidad. En un campo numérico, `.valueAsNumber` obtiene directamente un número o `NaN` si está vacío o no es válido. Valida que la cantidad sea un entero positivo y el precio no sea negativo.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const base = 3 * 2.5;
const total = base * 1.10;
console.log(total.toFixed(2)); // "8.25"
```

## Enunciado

1. Lee y valida cantidad y precio, rechazando campos vacíos.
2. Calcula base = cantidad × precio e IVA = base × 0.10.
3. Muestra base, IVA y total con dos decimales.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio4/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 3 unidades a 2.50 €: base 7.50, IVA 0.75, total 8.25.
- Rechaza cantidad 0, 1.5 y precios negativos; admite precio 0.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio4/README.md) · [Volver al índice](../README.md)
