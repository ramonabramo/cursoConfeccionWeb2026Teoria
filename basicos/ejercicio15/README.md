# Ejercicio 15: Objetivo de ahorro con while

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 14](../ejercicio14/README.md).

## Teoría que necesitas

`while` repite instrucciones mientras una condición sea verdadera. Resulta útil si no conocemos de antemano cuántas repeticiones necesitaremos. El estado debe avanzar en cada vuelta para alcanzar una condición de salida.

Aquí sumamos una aportación mensual hasta alcanzar una meta. Una aportación de cero impediría terminar; por eso la validamos antes del bucle. Un bucle síncrono ocupa el hilo principal del navegador: limita las entradas para no congelar la interfaz. Usaremos euros enteros, meta de 1 a 10 000 y aportación positiva.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
let total = 0;
while (total < 12) {
    total += 4;
}
```

## Enunciado

1. Valida ambos enteros de 1 a 10000.
2. Empieza con total = 0 y meses = 0; usa while hasta alcanzar la meta.
3. Muestra meses y total ahorrado; explica por qué no admites aportación 0.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio15/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Meta 100 y aportación 30 → 4 meses y 120 €.
- Meta 20 y aportación 20 → 1 mes; aportación 0 se rechaza.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio15/README.md) · [Volver al índice](../README.md)
