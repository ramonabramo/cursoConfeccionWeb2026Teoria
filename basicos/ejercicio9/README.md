# Ejercicio 9: Menú de operaciones

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 8](../ejercicio8/README.md).

## Teoría que necesitas

`switch` compara una expresión con varios casos usando igualdad estricta. Cada `case` representa un valor concreto; `break` termina la selección y evita continuar al caso siguiente. `default` atiende valores no contemplados.

Un `<select>` entrega en `.value` el valor de su opción seleccionada. En esta calculadora los números se convierten por separado y la operación se conserva como cadena. Dividir entre cero en JavaScript produce un infinito o `NaN`; en la interfaz debes mostrar un mensaje comprensible en lugar de ese resultado.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
switch (color) {
    case "verde": mensaje = "Adelante"; break;
    default: mensaje = "Espera";
}
```

## Enunciado

1. Valida los dos números y lee #operacion.
2. Usa switch con sumar, restar, multiplicar y dividir.
3. Controla la división por cero e incluye default.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio9/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 8 y 2 producen 10, 6, 16 o 4 según la opción.
- Dividir 8 entre 0 muestra No se puede dividir entre cero.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio9/README.md) · [Volver al índice](../README.md)
