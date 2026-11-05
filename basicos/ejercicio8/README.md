# Ejercicio 8: Clasificador de notas

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 7](../ejercicio7/README.md).

## Teoría que necesitas

Cuando hay varios casos, encadena `if`, `else if` y `else`. Solo se ejecuta el primer bloque cuya condición resulte verdadera. El orden es fundamental: si pruebas primero `nota >= 5`, una nota de 9 entraría ahí y nunca llegaría a sobresaliente.

Una estrategia sencilla es ordenar umbrales de mayor a menor. Valida primero el intervalo permitido y después clasifica. `||` expresa que basta con que una de las condiciones sea verdadera; permite rechazar valores por debajo de cero o por encima de diez.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
if (velocidad >= 100) {
    console.log("Alta");
} else if (velocidad >= 50) {
    console.log("Media");
} else {
    console.log("Baja");
}
```

## Enunciado

1. Valida una nota finita de 0 a 10, incluidos los extremos.
2. Clasifica: desde 9 Sobresaliente; desde 7 Notable; desde 5 Aprobado; resto Suspenso.
3. Prueba exactamente los umbrales.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio8/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 4.9 Suspenso, 5 Aprobado, 7 Notable, 9 y 10 Sobresaliente.
- -0.1, 10.1 y vacío se rechazan.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio8/README.md) · [Volver al índice](../README.md)
