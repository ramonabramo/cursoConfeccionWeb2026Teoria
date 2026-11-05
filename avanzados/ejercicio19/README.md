# Ejercicio 19: Catálogo de componentes

## Objetivo

Arrays paralelos, plantillas y generación de tarjetas. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

Los arrays paralelos relacionan datos por la misma posición: título, marca, precio e imagen del índice i pertenecen al mismo producto. `forEach()` facilita obtener valor e índice, pero debes garantizar que las colecciones tengan longitudes compatibles. En el ejercicio 22 sustituiremos este patrón por objetos.

Una función puede devolver una cadena HTML usando plantillas. El original utiliza `innerHTML` con datos definidos en el código. No traslades ese patrón directamente a entradas de usuario o datos de red: podrían contener HTML peligroso. En las prácticas nuevas se usa createElement y textContent para esos datos.

Ejemplo para estudiar el concepto:

```js
titulos.forEach((titulo, i) => {
    console.log(titulo, precios[i], imagenes[i]);
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio19/` con el servidor en marcha.

- Cargar genera las diez tarjetas con su imagen, marca y precio asociados.
- Comprueba que cada ruta de imagen existe dentro de la carpeta del ejercicio.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio19/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
