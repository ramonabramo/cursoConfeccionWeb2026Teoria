# Ejercicio 20: TechStore con lightbox

## Objetivo

Funciones, catálogo y ventana de detalle. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Descomponer una interfaz en funciones permite separar formateo, cálculo de cuota, renderizado y apertura o cierre del detalle. El índice del producto enlaza la tarjeta con sus datos mientras se mantienen los arrays paralelos del original.

Una ventana modal debe ofrecer una forma clara de cerrarse. En una mejora de accesibilidad también se gestiona el foco, Escape y el retorno al elemento que abrió el detalle. Conservamos el código original: lee sus tareas para distinguir lo ya implementado y lo que queda por completar. Los nuevos ejercicios presentan alternativas con objetos, módulos y DOM seguro.

Ejemplo para estudiar el concepto:

```js
function calcularCuota(precio, meses) {
    return precio / meses;
}
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio20/` con el servidor en marcha.

- Las diez tarjetas muestran datos coherentes y abren el detalle del producto pulsado.
- Comprueba las formas de cierre previstas en el original y el cálculo de la cuota.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio20/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
