# Ejercicio 31: Módulos y clases: un carrito

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 30](../ejercicio30/README.md).

## Teoría que necesitas

Los módulos nativos usan `export` e `import` y se cargan con `<script type="module">`. Cada módulo tiene su propio ámbito, se ejecuta en modo estricto y sus declaraciones no se convierten en variables globales de window. Escribe rutas relativas con extensión, como `./carrito.js`, y sirve los archivos por HTTP con un tipo MIME de JavaScript.

Una clase define cómo crear objetos con métodos y estado. `new Carrito()` crea una instancia; `#productos` es un campo privado y los getters permiten consultar propiedades calculadas. Los métodos de instancia se comparten mediante el prototipo de la clase. Las clases no son necesarias para todo objeto: aquí ayudan a encapsular las reglas del carrito mientras el DOM queda en otro módulo.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
// contador.js
export class Contador {
    valor = 0;
    incrementar() { this.valor += 1; }
}
// app.js
import { Contador } from "./contador.js";
const contador = new Contador();
```

## Enunciado

1. Completa carrito.js: clase Carrito con campo privado, agregar(producto), getters cantidad y total, y vaciar(). Valida el producto y guarda una copia superficial.
2. Exporta formatearEuros en formato.js usando Intl.NumberFormat; importa datos, clase y función desde app.js.
3. Crea un botón por producto. Cada pulsación añade una unidad y actualiza cantidad y total. Captura los errores del modelo.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML. Los archivos auxiliares indicados en el código también forman parte de la práctica.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio31/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Añadir Teclado y Ratón → 2 unidades y total 45,00 €; vaciar → 0 unidades.
- Una instancia rechaza precio negativo. Modificar el objeto original tras agregar no cambia el precio guardado. No aparecen variables de módulos en window.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio31/README.md) · [Volver al índice](../README.md)
