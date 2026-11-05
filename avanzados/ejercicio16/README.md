# Ejercicio 16: Sala de cine

## Objetivo

Estado de reservas y clases del DOM. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Una reserva tiene dos representaciones: los datos de butacas ocupadas y la clase CSS de cada butaca. Si actualizas solo una, la interfaz se contradice. Centraliza las operaciones o vuelve a renderizar desde los datos para mantenerlas sincronizadas.

`classList.contains()` consulta una clase; `add()` y `remove()` cambian su presencia. Para retirar un dato puedes usar `indexOf()` y `splice()`, o crear otro array con `filter()`. No asignes un array nuevo a una variable declarada con const; en ese caso modifica su contenido o utiliza let para la referencia.

Ejemplo para estudiar el concepto:

```js
const posicion = reservas.indexOf("Butaca 2");
if (posicion !== -1) reservas.splice(posicion, 1);
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio16/` con el servidor en marcha.

- Una butaca alterna reserva y liberación sin duplicarse en los datos.
- Ocupar todas, listar y liberar todas mantienen contador y clases coherentes.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio16/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
