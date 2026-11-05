# Ejercicio 9: La Megaburger

## Objetivo

Normalización de entradas y arrays. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`trim()` devuelve una cadena sin espacios exteriores. Si el resultado es vacío, la entrada no aporta un ingrediente. `push()` modifica el array; `length` consulta su número de elementos. Ambas operaciones deben realizarse sobre la misma colección que representa la hamburguesa.

Cuando muestres datos escritos por el usuario, `textContent` es la opción directa para tratarlos como texto. Los ingredientes predefinidos ya forman parte del array y cuentan en la longitud. Lee la inicialización del original para calcular correctamente el número esperado.

Ejemplo para estudiar el concepto:

```js
const ingrediente = entrada.value.trim();
if (ingrediente !== "") ingredientes.push(ingrediente);
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio9/` con el servidor en marcha.

- Añade un ingrediente con espacios exteriores: se guarda recortado.
- Medir cuenta también los elementos iniciales; una entrada de espacios no aumenta la cuenta.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio9/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
