# Ejercicio 15: Zoológico de emojis

## Objetivo

NodeList, forEach y acciones colectivas. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Una NodeList de `querySelectorAll()` permite usar `forEach()` para registrar eventos o cambiar cada elemento. El valor del callback es el elemento HTML; su índice puede relacionarlo con un array de nombres originales. No confundas la colección de nodos con los datos de los nombres.

Restaurar consiste en volver a escribir desde los datos de referencia y retirar los estilos aplicados. Si numeras tomando el texto ya numerado, acabarías acumulando prefijos. Generar siempre desde el array original hace repetible la operación.

Ejemplo para estudiar el concepto:

```js
tarjetas.forEach((tarjeta, indice) => {
    tarjeta.textContent = `${indice + 1}. ${nombres[indice]}`;
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio15/` con el servidor en marcha.

- Pulsar una tarjeta identifica su nombre y posición.
- Numerar dos veces no duplica prefijos; restablecer devuelve los nombres originales.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio15/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
