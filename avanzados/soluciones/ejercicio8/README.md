# Solución original 8: El tren de los monstruos

[Enunciado y teoría](../../ejercicio8/README.md) · [Índice](../README.md)

## Lectura guiada

Un array conserva elementos en orden. `push()` añade al final y `.length` informa de cuántos hay. No confundas el contenido de la colección con el mensaje que lo muestra en pantalla. El estado se declara fuera de los eventos para conservarlo entre pulsaciones.

Leer el campo dentro del click permite obtener el pasajero actual. Una comprobación de texto vacío evita vagones sin contenido. Una función de presentación permite mostrar los mismos datos al añadir y al contar.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Cuenta los pasajeros iniciales y añade uno: la cantidad aumenta en uno.
- Comprueba el tratamiento de una entrada vacía.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio8/`.
