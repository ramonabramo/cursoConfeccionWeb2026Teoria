# Ejercicio 18: DJ Studio: master playlist

## Objetivo

Operaciones de arrays y funciones declaradas. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`unshift()` y `shift()` añaden y quitan al principio; `push()` y `pop()` lo hacen al final. `includes()` responde si existe un valor y `indexOf()` devuelve su posición o -1. La comparación de cadenas distingue mayúsculas, por lo que debes conocer la regla de búsqueda del programa.

Una función declarada con nombre expresa una responsabilidad y se puede llamar desde varios botones. Separa añadir, buscar, quitar y presentar para evitar duplicar cambios de contador. Usa una única colección como estado y contempla el caso vacío en las operaciones de eliminación.

Ejemplo para estudiar el concepto:

```js
const cola = ["Jazz"];
cola.unshift("Rock");
console.log(cola.includes("Jazz"), cola.indexOf("Jazz"));
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio18/` con el servidor en marcha.

- Añadir al principio y al final conserva el orden previsto.
- Buscar, quitar de ambos extremos y vaciar actualizan lista y contador sin errores en vacío.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio18/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
