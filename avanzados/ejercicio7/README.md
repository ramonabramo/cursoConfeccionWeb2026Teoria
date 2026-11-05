# Ejercicio 7: Radar espacial

## Objetivo

Bucle for y repetición controlada. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Un bucle `for` combina contador, condición y actualización. Para generar N elementos puedes empezar en cero y repetir mientras el contador sea menor que N. Si empiezas en uno, la condición debe incluir N. No mezcles ambas convenciones.

Acumula las representaciones en una variable y muestra el resultado después del bucle. Valida el entero y los límites del campo para evitar trabajo excesivo o bucles mal definidos. El HTML orienta al usuario, pero la lógica también debe comprobar lo que necesita.

Ejemplo para estudiar el concepto:

```js
let texto = "";
for (let i = 0; i < 3; i += 1) texto += "*";
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio7/` con el servidor en marcha.

- Solicita 1 y después 5 naves: la cantidad dibujada coincide.
- Repite la acción y comprueba si se sustituye la salida según el enunciado original.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio7/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
