# Solución 17: Lista de la compra

[Enunciado y teoría](../../ejercicio17/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Un array puede guardar el estado de una interfaz. `push()` añade al final, `pop()` extrae el último y `join(", ")` produce una cadena con sus valores separados. La pantalla debe derivarse del array para que datos y presentación no se contradigan.

## Verificación

- Añadir Pan y Leche → 2 productos; quitar último deja Pan.
- Espacios no añaden nada; quitar de una lista vacía no falla.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio17/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
