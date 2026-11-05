# Solución original 5: Cambiar el color de una celda

[Enunciado y teoría](../../ejercicio5/README.md) · [Índice](../README.md)

## Lectura guiada

La propiedad `elemento.style` permite asignar estilos en línea. Los nombres CSS con guion se expresan en camelCase: `background-color` pasa a `backgroundColor`. El elemento pulsado se obtiene del evento, por lo que una sola función puede pintar distintas celdas.

El cambio persiste en el documento actual hasta que lo reviertas o recargues. Para aplicaciones más grandes suele resultar más cómodo alternar clases CSS con `classList`; aquí interesa observar directamente la relación entre evento y estilo.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Pulsa una celda y comprueba que cambia únicamente esa celda.
- Pulsa otra y observa que la primera conserva su nuevo color.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio5/`.
