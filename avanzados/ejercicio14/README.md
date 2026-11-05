# Ejercicio 14: La cesta de frutas

## Objetivo

forEach con valor e índice. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

`forEach()` recorre los elementos existentes y llama a una función con cada valor. Su segundo parámetro es el índice desde cero; para numerar para una persona suele mostrarse `indice + 1`. El método devuelve `undefined`, no una nueva lista transformada.

Para producir una salida puedes concatenar en un acumulador y escribir al final. Un salto de línea `\n` es un carácter de la cadena; su aspecto en pantalla depende de cómo trate el CSS los espacios. Compara una salida simple con una numerada y reutiliza la misma colección.

Ejemplo para estudiar el concepto:

```js
frutas.forEach((fruta, indice) => {
    console.log(`${indice + 1}. ${fruta}`);
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio14/` con el servidor en marcha.

- Mostrar recorre las cinco frutas; numerar empieza en 1.
- Limpiar recupera la salida inicial y no borra el array de datos.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio14/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
