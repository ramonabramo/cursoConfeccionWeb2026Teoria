# Ejercicio 12: El supermercado loco

## Objetivo

Colecciones de botones y carrito en memoria. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Una colección de botones puede recorrerse para asociar el mismo comportamiento a todos. Obtén el nombre del producto desde el elemento pulsado y añádelo al array del carrito. Después genera la salida a partir de ese array, en lugar de usar el DOM como almacén de datos.

Este ejercicio incluye variantes `app.js` y `app_1.js`. El navegador ejecuta el archivo enlazado en el HTML; los demás son alternativas de estudio. Compara sus decisiones en una copia si quieres probarlas sin mezclar dos implementaciones a la vez.

Ejemplo para estudiar el concepto:

```js
botones.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        carrito.push(evento.currentTarget.textContent);
    });
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio12/` con el servidor en marcha.

- Cada producto pulsado se incorpora al carrito en orden.
- Pulsa el mismo producto dos veces y observa la regla original de acumulación.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio12/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
