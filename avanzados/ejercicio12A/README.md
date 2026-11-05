# Ejercicio 12A: Delegación en un menú

## Objetivo

Burbujeo y un solo escuchador. Este ejercicio pertenece a la colección original. Su HTML, JavaScript, estilos e imágenes se han trasladado sin cambiar su contenido. Las carpetas incluyen ejemplos resueltos y plantillas en distintos estados de desarrollo.

## Teoría de apoyo

El click de un elemento de lista se propaga a sus ancestros. Un escuchador en `#menu` puede atender todas las opciones. `target` identifica el elemento de origen y `currentTarget` sigue siendo el menú. Usa `closest("li")` y comprueba que pertenece al contenedor para ignorar clicks sobre huecos.

El HTML original no enlaza `app.js`; se conserva tal como estaba. Para probar tu implementación, trabaja sobre una copia y añade `<script defer src="app.js"></script>` al head, o utiliza la solución nueva, que sí incluye el enlace. No necesitas modificar el original para estudiar el patrón.

Ejemplo para estudiar el concepto:

```js
menu.addEventListener("click", (evento) => {
    const opcion = evento.target.closest("li");
    if (opcion) console.log(opcion.textContent);
});
```

## Trabajo propuesto

Lee los comentarios y las tareas de `app.js`, observa los identificadores del HTML y completa o explica el comportamiento que describen. Si el código ya está resuelto, intenta reproducirlo en una copia antes de consultar la solución. No es necesario reescribir el diseño.

## Ejecución y comprobaciones

Consulta [cómo arrancar el curso](../../README.md) y abre `http://localhost:8000/avanzados/ejercicio12A/` con el servidor en marcha.

- En una copia con el script enlazado, cada ciudad aparece en #pantalla al pulsarla.
- Un click en un hueco del menú no muestra el texto de todas las ciudades.
- Revisa la consola y explica la diferencia entre entradas, procesamiento y salida.

[Solución](../soluciones/ejercicio12A/README.md) · [Índice de avanzados](../README.md) · [Temario](../../TEMARIO.md)
