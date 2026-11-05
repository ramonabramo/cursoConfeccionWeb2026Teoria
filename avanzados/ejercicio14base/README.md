# Ejercicio 14base: Del for a forEach

## Objetivo

Recorridos de arrays y colecciones del DOM. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`forEach(callback)` invoca el callback para cada elemento. Recibe el valor y opcionalmente el índice. No permite salir con `break`: un `return` sale solo de ese callback. Usa `for`, `for...of`, `find()` o `some()` si necesitas otra forma de control. Ningún recorrido es universalmente mejor.

El original ejecuta los dos ejemplos (for y forEach) y registra los dos grupos de escuchadores. Por eso algunos resultados o avisos se repiten: son ejemplos de comparación, no dos pasos que deban copiarse juntos a una aplicación final. Se conserva esta variante para estudiarla.

Ejemplo para estudiar el concepto:

```js
["sol", "mar"].forEach((palabra, indice) => {
    console.log(indice, palabra);
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio14base/` con el servidor en marcha.

- Localiza qué salidas provienen del for y cuáles de forEach.
- Explica por qué un mismo enlace puede provocar dos avisos en el ejemplo original.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio14base/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
