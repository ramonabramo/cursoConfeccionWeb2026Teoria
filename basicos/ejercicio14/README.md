# Ejercicio 14: Tabla de multiplicar

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 13](../ejercicio13/README.md).

## Teoría que necesitas

El bucle `for` tiene inicialización, condición y actualización. Antes de cada vuelta se comprueba la condición. Un límite equivocado puede omitir el último elemento o crear un bucle infinito. En esta tabla queremos los multiplicadores de 1 a 10, incluidos.

`document.createElement()` construye un elemento y `.append()` lo añade al DOM. `replaceChildren()` vacía un contenedor antes de generar una nueva tabla. Es preferible insertar el contenido variable con `textContent`, especialmente si pudiera venir de usuarios. El DOM no obliga a construir cadenas HTML.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
for (let i = 1; i <= 3; i += 1) {
    console.log(i);
}
```

## Enunciado

1. Valida un entero entre -100 y 100 y limpia #tabla antes de cada intento.
2. Recorre los multiplicadores de 1 a 10 con for.
3. Crea un li por producto y muestra cuántas filas se generaron.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio14/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 7 genera diez filas, desde 7 × 1 = 7 hasta 7 × 10 = 70.
- Generar dos veces sigue dando diez filas; vacío limpia la lista y avisa.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio14/README.md) · [Volver al índice](../README.md)
