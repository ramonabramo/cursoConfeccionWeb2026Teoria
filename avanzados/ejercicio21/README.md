# Ejercicio 21: Objetos: una ficha de estudiante

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 20](../ejercicio20/README.md).

## Teoría que necesitas

Un objeto agrupa propiedades relacionadas mediante pares clave–valor. Puedes leer `persona.nombre` o `persona[clave]`. Una propiedad también puede contener una función: un método. Dentro de un método llamado como `persona.presentarse()`, `this` se refiere al objeto receptor. Usa sintaxis de método, no una flecha, si necesitas ese `this`.

Los objetos se comparten por referencia: `const otra = persona` no crea una copia. `{ ...persona }` crea una copia superficial; los objetos anidados continuarían compartidos. La desestructuración extrae propiedades a variables. `const` impide reasignar la referencia, pero permite actualizar propiedades. La práctica usa propiedades planas para que puedas observar una copia independiente de sus valores primitivos.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const libro = { titulo: "JavaScript", paginas: 120 };
const copia = { ...libro };
const { titulo } = libro;
libro.paginas += 10; // copia.paginas sigue siendo 120
```

## Enunciado

1. Crea estudiante con nombre Ana, puntos 0 y método presentarse() que use this.
2. Actualiza el nombre recortado y suma puntos con los botones; muestra el método en #salida.
3. Al copiar, usa spread y desestructuración para mostrar el nombre y puntos de la copia en consola. Comprueba que sumar después no cambia sus puntos.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio21/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Al cargar se ve Ana: 0 puntos; dos pulsaciones dan 2 puntos.
- Un nombre vacío se rechaza; la copia conserva los puntos del momento en que se creó.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio21/README.md) · [Volver al índice](../README.md)
