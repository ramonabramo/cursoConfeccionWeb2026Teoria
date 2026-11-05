# Ejercicio 13: La pizzería del chef

## Objetivo

Añadir, quitar y vaciar un array. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`push()` añade al final, `pop()` devuelve y elimina el último elemento, y asignar `length = 0` vacía un array conservando la misma referencia. Después de cada cambio hay que actualizar tanto la lista como su contador.

Las operaciones sobre una colección vacía necesitan un mensaje adecuado. Hornear no tiene el mismo significado que añadir: consulta el estado y decide si la acción está permitida. El original incluye instrucciones detalladas en app.js y una variante adicional en la carpeta de soluciones.

Ejemplo para estudiar el concepto:

```js
const ingredientes = ["Tomate"];
ingredientes.pop();
console.log(ingredientes.length); // 0
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio13/` con el servidor en marcha.

- Añadir, quitar y vaciar mantienen sincronizados contador y contenido.
- Hornear una pizza vacía informa del problema; con ingredientes muestra el resumen.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio13/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
