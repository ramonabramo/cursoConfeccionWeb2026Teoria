# Ejercicio 10: La máquina del tiempo

## Objetivo

Límites dinámicos de un bucle. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

El inicio y el fin de un recorrido pueden proceder de campos del formulario. Convierte ambos a números antes de compararlos; las cadenas se compararían de otra manera. Un bucle desde inicio hasta fin incluido usa una condición `<=`.

Valida el orden antes de entrar al bucle. Una variable acumuladora vacía permite construir la bitácora; el separador se añade en cada vuelta según el formato pedido. Para evitar bloquear el navegador en una ampliación, limita también el tamaño del intervalo de años.

Ejemplo para estudiar el concepto:

```js
for (let anio = inicio; anio <= fin; anio += 1) {
    console.log(anio);
}
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio10/` con el servidor en marcha.

- 1980 a 1982 muestra tres años.
- Un inicio mayor que el fin produce el aviso descrito en app.js.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio10/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
