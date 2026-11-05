# Ejercicio 20: Reto final básico: cuestionario

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 19](../ejercicio19/README.md).

## Teoría que necesitas

Una aplicación pequeña combina datos, estado, funciones, eventos y DOM. En este cuestionario los arrays contienen preguntas y respuestas en posiciones equivalentes. El índice actual indica qué pregunta se muestra y un contador guarda los aciertos.

Cada respuesta válida hace avanzar exactamente una posición. Cuando el índice alcanza `.length`, ya no hay otra pregunta: desactiva el envío y presenta el resultado. Una función de reinicio debe recuperar todo el estado y la interfaz. Antes de programar, escribe en papel las transiciones inicio, respuesta, siguiente pregunta y final.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const preguntas = ["Color del cielo", "Doble de 3"];
const respuestas = ["azul", "6"];
let indice = 0;
```

## Enunciado

1. Usa las tres preguntas y respuestas del código inicial; compara trim().toLowerCase().
2. No avances con respuestas vacías; con cualquier otra respuesta avanza y suma si es correcta.
3. Tras la tercera respuesta muestra Aciertos: X de 3 y desactiva el envío. Reiniciar restaura índice, aciertos, campos y botón.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio20/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- const, 0 y click → 3 de 3 (sin distinguir mayúsculas ni espacios exteriores).
- Vacío no avanza; tres incorrectas → 0 de 3; reiniciar permite jugar otra vez.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio20/README.md) · [Volver al índice](../README.md)
