# Ejercicio 11: Funciones para descuentos

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 10](../ejercicio10/README.md).

## Teoría que necesitas

Una función puede tener varios parámetros y un valor por defecto. Si omites el argumento correspondiente, se usa ese valor. Las funciones permiten describir una operación una sola vez y llamarla desde distintos eventos.

Mantén el cálculo independiente de los campos HTML: `aplicarDescuento(precio, porcentaje = 10)` debe devolver un número. El manejador valida y presenta. Una función flecha puede servir como callback del evento; no necesitas usarla para todas las funciones. Las variables de cada llamada son locales y no modifican automáticamente las de otra llamada.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
function calcularDoble(numero = 1) {
    return numero * 2;
}
calcularDoble(); // 2
```

## Enunciado

1. Define aplicarDescuento(precio, porcentaje = 10).
2. Valida precio no negativo y porcentaje entre 0 y 100.
3. Muestra el precio final con dos decimales; prueba también la función desde consola sin segundo argumento.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio11/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 100 y 20 → 80.00 €; 50 y 100 → 0.00 €.
- aplicarDescuento(200) devuelve 180; -1 y 101 % se rechazan.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio11/README.md) · [Volver al índice](../README.md)
