# Ejercicio 6: Guardar números y acumular su suma

## Objetivo

Conversión, arrays, acumulador y clases CSS. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Los campos proporcionan cadenas en `.value`; conviértelas antes de sumar. Un array guarda los números introducidos y un acumulador conserva el total parcial durante el recorrido. Inicializa la suma a cero cada vez que la vuelvas a calcular.

`join()` presenta el contenido sin confundir la representación visual con el array. Las clases `oculto` y `con-datos` separan el estado visual de los datos. El código original es una plantilla con pasos pendientes: identifica sus referencias al DOM antes de completar el evento.

Ejemplo para estudiar el concepto:

```js
const valores = [3, 5];
let suma = 0;
for (const valor of valores) suma += valor;
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio6/` con el servidor en marcha.

- Añade 2 y 3: la lista contiene ambos y la suma es 5.
- Comprueba que el panel de resultados se hace visible al añadir datos.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio6/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
