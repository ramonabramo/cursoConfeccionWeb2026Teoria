# Solución añadida: menú con delegación

[Enunciado y teoría](../../ejercicio12A/README.md) · [Índice](../README.md)

Esta solución completa la variante 12A, que no tenía solución en la colección original. Su HTML enlaza `app.js` con `defer`. El ejercicio original se conserva intacto.

Un solo escuchador en `#menu` aprovecha el burbujeo. `closest("li")` encuentra la opción y la comprobación de pertenencia descarta los clicks que no corresponden. El texto de la opción se escribe en `#pantalla`.

Arranca el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio12A/`. Pulsa Santander y después Madrid: se muestra la última ciudad. Pulsar un hueco no cambia el resultado.
