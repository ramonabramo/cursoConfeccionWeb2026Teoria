# Solución original 3: Seleccionar varias celdas

[Enunciado y teoría](../../ejercicio3/README.md) · [Índice](../README.md)

## Lectura guiada

`querySelectorAll("td")` devuelve una NodeList con los elementos que coinciden en ese momento. Se accede por índice desde cero y se puede consultar su longitud. Una NodeList no es un array, aunque permite `forEach()` y acceso por índice. No dispone de todos los métodos de Array.

En esta variante se asignan los eventos por posiciones concretas. Compara el resultado con el ejercicio 2. Más adelante un recorrido evitará repetir instrucciones y permitirá trabajar con una cantidad variable de celdas.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Identifica qué celda es celdas[0] y cuál es celdas[3].
- Pulsa todas las celdas y compara con el ejercicio 2.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio3/`.
