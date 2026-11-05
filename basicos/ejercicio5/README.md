# Ejercicio 5: Convertidor de temperatura

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 4](../ejercicio4/README.md).

## Teoría que necesitas

Una función agrupa instrucciones y puede recibir parámetros. `return` entrega un resultado a quien la llama y termina esa ejecución. Una función de cálculo puede trabajar sin conocer el DOM: recibe números y devuelve números. Otra parte del programa se encarga de leer y mostrar.

Las variables declaradas dentro de una función tienen alcance local: no se leen desde fuera. Esta separación facilita probar la fórmula en la consola y reutilizarla. La conversión de Celsius a Fahrenheit es `celsius * 9 / 5 + 32`. No confundas devolver un resultado con imprimirlo.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
function duplicar(numero) {
    return numero * 2;
}
const resultado = duplicar(4); // 8
```

## Enunciado

1. Declara celsiusAFahrenheit(celsius) que devuelva la conversión.
2. Al pulsar #convertir valida la entrada numérica y llama a la función.
3. Muestra el resultado con un decimal y la unidad °F.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio5/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 0 → 32.0 °F; 100 → 212.0 °F; -40 → -40.0 °F.
- Un campo vacío pide una temperatura válida.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio5/README.md) · [Volver al índice](../README.md)
