# Ejercicio 5: Cambiar el color de una celda

## Objetivo

Propiedad style y elemento del evento. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

La propiedad `elemento.style` permite asignar estilos en línea. Los nombres CSS con guion se expresan en camelCase: `background-color` pasa a `backgroundColor`. El elemento pulsado se obtiene del evento, por lo que una sola función puede pintar distintas celdas.

El cambio persiste en el documento actual hasta que lo reviertas o recargues. Para aplicaciones más grandes suele resultar más cómodo alternar clases CSS con `classList`; aquí interesa observar directamente la relación entre evento y estilo.

Ejemplo para estudiar el concepto:

```js
elemento.style.backgroundColor = "gold";
// Alternativa que estudiarás: elemento.classList.add("seleccionada");
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio5/` con el servidor en marcha.

- Pulsa una celda y comprueba que cambia únicamente esa celda.
- Pulsa otra y observa que la primera conserva su nuevo color.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio5/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
