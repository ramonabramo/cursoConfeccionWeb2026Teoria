# Ejercicio 8: El tren de los monstruos

## Objetivo

Array, push, length y estado. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Un array conserva elementos en orden. `push()` añade al final y `.length` informa de cuántos hay. No confundas el contenido de la colección con el mensaje que lo muestra en pantalla. El estado se declara fuera de los eventos para conservarlo entre pulsaciones.

Leer el campo dentro del click permite obtener el pasajero actual. Una comprobación de texto vacío evita vagones sin contenido. Una función de presentación permite mostrar los mismos datos al añadir y al contar.

Ejemplo para estudiar el concepto:

```js
const tren = ["A", "B"];
tren.push("C");
console.log(tren.length); // 3
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio8/` con el servidor en marcha.

- Cuenta los pasajeros iniciales y añade uno: la cantidad aumenta en uno.
- Comprueba el tratamiento de una entrada vacía.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio8/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
