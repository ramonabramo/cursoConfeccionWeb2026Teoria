# Ejercicio 22: Catálogo con arrays de objetos

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 21](../ejercicio21/README.md).

## Teoría que necesitas

Un array de objetos mantiene juntos los datos de cada elemento y evita sincronizar arrays paralelos. `filter()` crea una selección, `map()` transforma cada elemento, `find()` devuelve el primer elemento coincidente o `undefined`, y `reduce()` acumula un resultado. Usa un valor inicial para que `reduce()` funcione también con arrays vacíos.

`sort()` modifica el array sobre el que trabaja; copia antes con `[...productos]` si quieres conservar el orden original. La función comparadora numérica devuelve un número negativo, cero o positivo. `some()` y `every()` expresan si algún elemento o todos cumplen una condición. Esta práctica usa filter, sort, map, reduce y find; prueba some y every en consola como ampliación.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const caros = productos.filter(({ precio }) => precio > 50);
const nombres = caros.map(({ nombre }) => nombre);
const total = caros.reduce((suma, { precio }) => suma + precio, 0);
```

## Enunciado

1. Usa los productos iniciales. Filtra por precio máximo y ordena de menor a mayor precio sin modificar el array original.
2. Crea un li por resultado, muestra la suma de precios (una unidad de cada resultado) y los nombres obtenidos con map.
3. Busca un producto por id con find y contempla el caso inexistente.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio22/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Máximo 30 → Cable USB, Ratón, Teclado; suma 53.00 €.
- Máximo 0 → sin resultados y suma 0; p3 encuentra Monitor; xxx no encuentra nada.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio22/README.md) · [Volver al índice](../README.md)
