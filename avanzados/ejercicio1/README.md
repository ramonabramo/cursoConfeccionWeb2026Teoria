# Ejercicio 1: Leer el párrafo pulsado

## Objetivo

Selección individual, eventos y salida de texto. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

El DOM representa cada etiqueta como un objeto. `querySelector("#parrafo1")` localiza un elemento por id. Al registrar `addEventListener("click", mostrar)` pasas una referencia a la función, sin ejecutarla todavía. El navegador le entregará el objeto evento al producirse el click.

`evento.target` identifica el origen del evento y `textContent` lee o escribe texto sin interpretar HTML. Una misma función puede atender varios elementos. El resultado sustituye el texto anterior si asignas con `=`.

Ejemplo para estudiar el concepto:

```js
function informar(evento) {
    console.log(evento.target.textContent);
}
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio1/` con el servidor en marcha.

- Pulsa los tres párrafos y observa que la salida corresponde al último pulsado.
- Relaciona cada referencia del DOM con el escuchador que utiliza la misma función.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio1/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
