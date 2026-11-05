# Ejercicio 6: Control de edad

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 5](../ejercicio5/README.md).

## Teoría que necesitas

Una condición produce `true` o `false`. `if` ejecuta un bloque si la condición es verdadera y `else` ofrece una alternativa. `>=` incluye el límite; `>` lo excluye. Las llaves delimitan cada bloque.

Antes de tomar una decisión, comprueba que los datos tengan sentido. `Number.isInteger()` comprueba que un número es entero. Un `return` dentro del manejador permite terminar después de mostrar un error y evita que el programa siga con datos incorrectos. La validación y la decisión de negocio son pasos distintos.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
if (puntos >= 100) {
    console.log("Premio");
} else {
    console.log("Sigue jugando");
}
```

## Enunciado

1. Valida una edad entera entre 0 y 120.
2. Muestra Mayor de edad desde 18 incluido; en otro caso Menor de edad.
3. Utiliza if/else para la decisión.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio6/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 17 es menor; 18 es mayor; 0 es una edad válida.
- -1, 121, 18.5 y vacío muestran Edad no válida.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio6/README.md) · [Volver al índice](../README.md)
