# Ejercicio 3: Seleccionar varias celdas

## Objetivo

querySelectorAll, NodeList e índices. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`querySelectorAll("td")` devuelve una NodeList con los elementos que coinciden en ese momento. Se accede por índice desde cero y se puede consultar su longitud. Una NodeList no es un array, aunque permite `forEach()` y acceso por índice. No dispone de todos los métodos de Array.

En esta variante se asignan los eventos por posiciones concretas. Compara el resultado con el ejercicio 2. Más adelante un recorrido evitará repetir instrucciones y permitirá trabajar con una cantidad variable de celdas.

Ejemplo para estudiar el concepto:

```js
const celdas = document.querySelectorAll("td");
console.log(celdas.length, celdas[0]);
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio3/` con el servidor en marcha.

- Identifica qué celda es celdas[0] y cuál es celdas[3].
- Pulsa todas las celdas y compara con el ejercicio 2.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio3/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
