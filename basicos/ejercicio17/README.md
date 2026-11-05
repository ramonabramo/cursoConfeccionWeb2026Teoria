# Ejercicio 17: Lista de la compra

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 16](../ejercicio16/README.md).

## Teoría que necesitas

Un array puede guardar el estado de una interfaz. `push()` añade al final, `pop()` extrae el último y `join(", ")` produce una cadena con sus valores separados. La pantalla debe derivarse del array para que datos y presentación no se contradigan.

Centraliza la presentación en una función `renderizar()`: llámala al empezar y después de cada cambio. `trim()` permite detectar entradas que solo contienen espacios. En esta lista se admiten duplicados; no añadas reglas que no pide el enunciado. Al recargar se pierde el estado, porque todavía no usamos almacenamiento.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const tareas = [];
tareas.push("Leer");
console.log(tareas.join(", "));
tareas.pop();
```

## Enunciado

1. Mantén un array compra; añade el producto recortado si no está vacío.
2. Implementa quitar último y vaciar, incluso con la lista vacía.
3. Muestra cantidad y contenido tras cada operación; limpia el campo y devuelve el foco al añadir.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio17/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Añadir Pan y Leche → 2 productos; quitar último deja Pan.
- Espacios no añaden nada; quitar de una lista vacía no falla.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio17/README.md) · [Volver al índice](../README.md)
