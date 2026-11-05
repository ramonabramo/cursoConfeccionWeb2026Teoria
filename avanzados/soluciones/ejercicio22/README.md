# Solución 22: Catálogo con arrays de objetos

[Enunciado y teoría](../../ejercicio22/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Un array de objetos mantiene juntos los datos de cada elemento y evita sincronizar arrays paralelos. `filter()` crea una selección, `map()` transforma cada elemento, `find()` devuelve el primer elemento coincidente o `undefined`, y `reduce()` acumula un resultado. Usa un valor inicial para que `reduce()` funcione también con arrays vacíos.

## Verificación

- Máximo 30 → Cable USB, Ratón, Teclado; suma 53.00 €.
- Máximo 0 → sin resultados y suma 0; p3 encuentra Monitor; xxx no encuentra nada.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio22/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
