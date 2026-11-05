# Ejercicio 16: Mi primer array

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 15](../ejercicio15/README.md).

## Teoría que necesitas

Un array es una colección ordenada de valores. Los índices empiezan en cero: el primer elemento es `lista[0]` y el último es `lista[lista.length - 1]`. `.length` expresa la cantidad de elementos, no el último índice.

`for...of` recorre los valores de un array. Si necesitas un número de posición, puedes mantener un contador separado. Un array declarado con `const` puede cambiar sus elementos; lo que no puede es reasignarse a otro array. En este ejercicio lo usaremos como datos de lectura para mostrar una lista.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const colores = ["azul", "verde"];
for (const color of colores) {
    console.log(color);
}
```

## Enunciado

1. Usa el array materiales de app.js.
2. Al pulsar, vacía #lista y crea un li por valor con for...of.
3. Muestra cantidad, primer y último material en #salida.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio16/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Se ven Cuaderno, Lápiz y Regla, en ese orden.
- Cantidad 3; primero Cuaderno, último Regla. Repetir no duplica elementos.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio16/README.md) · [Volver al índice](../README.md)
