# Ejercicio 2: Mi ficha con variables

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 1](../ejercicio1/README.md).

## Teoría que necesitas

Una variable da nombre a un valor. Usa `const` cuando no vayas a reasignar ese nombre y `let` cuando el valor vaya a cambiar. Una cadena (`string`), un número (`number`) y un booleano (`boolean`) representan información diferente. `typeof` permite consultar el tipo de un valor.

Las plantillas de cadena usan acentos graves y `${expresion}` para insertar valores. Los nombres son sensibles a mayúsculas. Evita `var` en estas primeras prácticas: aprenderemos el alcance de bloque con `let` y `const`. No pongas comillas alrededor de un número con el que quieras calcular.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const ciudad = "Santander";
let visitas = 2;
visitas = visitas + 1;
console.log(`${ciudad}: ${visitas} visitas`, typeof visitas);
```

## Enunciado

1. Declara nombre con tu nombre, edad con 20 y estudiante con true.
2. Incrementa edad en uno usando let.
3. Muestra Nombre: … | Edad: 21 | Estudiante: true en #salida y los tipos en consola.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio2/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- La edad final es 21 y su tipo es number.
- estudiante es boolean, no la cadena "true".
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio2/README.md) · [Volver al índice](../README.md)
