# Ejercicio 11: Párrafos y celdas con salidas distintas

## Objetivo

Recorrer colecciones y sustituir o acumular. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Un bucle puede registrar eventos en cada elemento de una colección. La función registrada no se ejecuta durante el registro, sino en cada interacción posterior. Usa `let` para un contador de bloque cuando debas capturar su valor en un callback.

Asignar con `=` sustituye la salida; `+=` concatena con lo que ya había. En este ejercicio los párrafos y las celdas tienen reglas diferentes y contenedores de salida distintos. Identificar esos dos flujos ayuda a evitar que una acción modifique el panel equivocado.

Ejemplo para estudiar el concepto:

```js
salida.textContent = "Último valor";
pantalla.textContent += "Nuevo valor";
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio11/` con el servidor en marcha.

- Los párrafos muestran solo el último texto pulsado en su salida.
- Las celdas concatenan en el otro panel sin cambiar el de los párrafos.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio11/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
