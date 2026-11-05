# Ejercicio 17: La máquina de escribir

## Objetivo

keydown, teclas especiales y banderas. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

El objeto de un evento `keydown` ofrece `.key`: puede contener un carácter o nombres como Enter y Backspace. Una bandera booleana recuerda el modo mayúsculas entre eventos. Las teclas modificadoras no deben añadirse al texto como palabras.

Escuchar en window afecta a toda la página. En una ampliación, limita la captura a una zona y respeta atajos de Ctrl/Meta y campos editables. `preventDefault()` debe usarse solo cuando estés sustituyendo una acción concreta. El original practica cadenas y estados, no un editor completo con composición de texto e internacionalización.

Ejemplo para estudiar el concepto:

```js
if (evento.key === "Enter") texto += "\n";
else if (evento.key.length === 1) texto += evento.key;
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio17/` con el servidor en marcha.

- Escribe letras, usa Enter y Backspace y observa el contador.
- Alterna mayúsculas y limpia; teclas como Shift no deben escribirse como texto.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio17/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
