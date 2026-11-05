# Solución 13: Un panel que cambia

[Enunciado y teoría](../../ejercicio13/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`classList` permite añadir, quitar y alternar clases CSS sin reescribir estilos. `toggle("clase")` activa la clase si no está y la quita si ya existe; devuelve si ha quedado activa. La propiedad `hidden` controla si se muestra un elemento.

## Verificación

- Dos pulsaciones en Destacar recuperan el estilo inicial.
- Ocultar quita el panel; Mostrar lo devuelve; funciona con Tab y Enter.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio13/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
