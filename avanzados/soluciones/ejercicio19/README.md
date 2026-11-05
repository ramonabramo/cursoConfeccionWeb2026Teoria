# Solución original 19: Catálogo de componentes

[Enunciado y teoría](../../ejercicio19/README.md) · [Índice](../README.md)

## Lectura guiada

Los arrays paralelos relacionan datos por la misma posición: título, marca, precio e imagen del índice i pertenecen al mismo producto. `forEach()` facilita obtener valor e índice, pero debes garantizar que las colecciones tengan longitudes compatibles. En el ejercicio 22 sustituiremos este patrón por objetos.

Una función puede devolver una cadena HTML usando plantillas. El original utiliza `innerHTML` con datos definidos en el código. No traslades ese patrón directamente a entradas de usuario o datos de red: podrían contener HTML peligroso. En las prácticas nuevas se usa createElement y textContent para esos datos.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Cargar genera las diez tarjetas con su imagen, marca y precio asociados.
- Comprueba que cada ruta de imagen existe dentro de la carpeta del ejercicio.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio19/`.
