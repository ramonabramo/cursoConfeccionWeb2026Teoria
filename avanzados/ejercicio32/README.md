# Ejercicio 32: Proyecto final: catálogo con favoritos

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 31](../ejercicio31/README.md).

## Teoría que necesitas

Integra las capas de una aplicación en cliente: datos remotos, estado en memoria, persistencia y presentación. El módulo de API conoce HTTP y valida el esquema; el de almacenamiento convierte datos a JSON; el módulo principal coordina eventos y construye el DOM. Una sola fuente de datos evita que filtros y contadores se contradigan.

Los identificadores de favoritos deben ser estables y no depender de la posición del catálogo. Recupera favoritos con tolerancia a errores, carga los productos con estados explícitos y filtra sobre el catálogo completo. Un error al guardar no debe borrar el trabajo en memoria. Esta práctica no requiere un backend: el JSON local simula el recurso de lectura. Una ampliación real con POST necesitaría un endpoint que acepte ese método, validación de servidor y conocer su política CORS; no se soluciona con `mode: "no-cors"`.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const visibles = productos.filter((p) => p.nombre.toLowerCase().includes(termino));
const esFavorito = favoritos.includes(producto.id);
```

## Enunciado

1. Completa api.js con cargarProductos(url): comprueba HTTP, JSON, esquema e ids únicos; usa async/await.
2. Completa almacenamiento.js con leerFavoritos y guardarFavoritos. Usa la clave curso-js-ejercicio32-favoritos y captura sus errores desde app.js.
3. Carga el catálogo al pulsar y muestra estados. Filtra por nombre, stock y favoritos con eventos input/change; mantén todos los filtros al renderizar.
4. Genera botones de favorito con aria-pressed y usa delegación. Conserva favoritos al recargar. Presenta cantidad visible y suma de precios de una unidad de cada producto visible.
5. Separa funciones de carga, presentación y persistencia; usa textContent para los datos.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML. Los archivos auxiliares indicados en el código también forman parte de la práctica.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio32/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Cargar → 4 productos; solo stock → 3; buscar Cable → 1, suma 8,00 €.
- Marca un favorito, recarga, carga y activa Solo favoritos: se conserva. Las etiquetas HTML en los datos se muestran literalmente.
- 404 y vacío limpian el catálogo anterior y muestran su estado; reintentar permite recuperarse. JSON o almacenamiento inválidos no detienen toda la página.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio32/README.md) · [Volver al índice](../README.md)
