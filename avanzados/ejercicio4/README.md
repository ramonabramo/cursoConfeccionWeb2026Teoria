# Ejercicio 4: Colección de párrafos

## Objetivo

Seleccionar por etiqueta y acceder por índice. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Un selector de etiqueta como `p` selecciona todos los párrafos del documento. Cada posición de la colección contiene un elemento, no su texto: primero accedes al elemento y después a `textContent`. Un índice fuera de la colección produce `undefined`.

La función del evento puede compartirse entre varios párrafos. Esta práctica transforma el ejercicio 1 para trabajar con una colección. El selector debe representar exactamente los elementos que quieras escuchar; añadir más párrafos al HTML puede cambiar la colección.

Ejemplo para estudiar el concepto:

```js
const parrafos = document.querySelectorAll("p");
console.log(parrafos[0].textContent);
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio4/` con el servidor en marcha.

- Pulsa los tres párrafos y comprueba que cada uno actualiza la salida.
- Explica por qué el primer índice es 0 y no 1.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio4/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
