# Solución 5: Convertidor de temperatura

[Enunciado y teoría](../../ejercicio5/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una función agrupa instrucciones y puede recibir parámetros. `return` entrega un resultado a quien la llama y termina esa ejecución. Una función de cálculo puede trabajar sin conocer el DOM: recibe números y devuelve números. Otra parte del programa se encarga de leer y mostrar.

## Verificación

- 0 → 32.0 °F; 100 → 212.0 °F; -40 → -40.0 °F.
- Un campo vacío pide una temperatura válida.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio5/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
