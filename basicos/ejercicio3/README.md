# Ejercicio 3: Sumar dos entradas

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 2](../ejercicio2/README.md).

## Teoría que necesitas

El valor `.value` de un campo es una cadena, incluso con `type="number"`. El operador `+` concatena cadenas: `"2" + "3"` produce `"23"`. `Number()` convierte una cadena completa a número. Una cadena vacía se convierte en cero, por eso hay que comprobarla antes.

Un evento es una notificación del navegador. `addEventListener("click", funcion)` registra una función que se ejecutará al pulsar el botón. Leer los campos dentro de esa función permite usar su valor actualizado. `Number.isFinite()` descarta `NaN` e infinitos. Para rechazar una entrada usaremos una primera condición: `if (hayProblema) { ...; return; }`. `return` termina el manejador después de mostrar el aviso; estudiaremos las decisiones con más detalle desde el ejercicio 6.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const texto = "12";
console.log(Number(texto) + 4); // 16
```

## Enunciado

1. Escucha el click de #calcular y lee #a y #b dentro del evento.
2. Rechaza los campos vacíos y convierte a Number.
3. Si ambos números son finitos, muestra su suma en #salida.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio3/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 2 y 3 muestran 5; -2 y 0.5 muestran -1.5.
- Un campo vacío muestra Completa los dos números.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio3/README.md) · [Volver al índice](../README.md)
