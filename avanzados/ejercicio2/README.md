# Ejercicio 2: Leer una celda

## Objetivo

Eventos en tablas y reutilización de funciones. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Las celdas de una tabla también son elementos del DOM. Puedes capturarlas por id y registrar una misma función en todas. El parámetro del manejador es un objeto evento, no el texto de la celda. Para obtener el texto hay que acceder a la propiedad del elemento.

Seleccionar un elemento y escuchar un evento son acciones distintas. Una referencia no reacciona sola. Comprueba que cada selector encuentra el elemento previsto y que el script se ejecuta después de construir el HTML.

Ejemplo para estudiar el concepto:

```js
const celda = document.querySelector("td");
celda.addEventListener("click", (evento) => console.log(evento.target.textContent));
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio2/` con el servidor en marcha.

- Pulsa una celda de texto y otra numérica: ambas se muestran como texto.
- Comprueba que la salida sustituye el contenido anterior.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio2/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
