# Solución 32: Proyecto final: catálogo con favoritos

[Enunciado y teoría](../../ejercicio32/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Integra las capas de una aplicación en cliente: datos remotos, estado en memoria, persistencia y presentación. El módulo de API conoce HTTP y valida el esquema; el de almacenamiento convierte datos a JSON; el módulo principal coordina eventos y construye el DOM. Una sola fuente de datos evita que filtros y contadores se contradigan.

## Verificación

- Cargar → 4 productos; solo stock → 3; buscar Cable → 1, suma 8,00 €.
- Marca un favorito, recarga, carga y activa Solo favoritos: se conserva. Las etiquetas HTML en los datos se muestran literalmente.
- 404 y vacío limpian el catálogo anterior y muestran su estado; reintentar permite recuperarse. JSON o almacenamiento inválidos no detienen toda la página.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio32/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
