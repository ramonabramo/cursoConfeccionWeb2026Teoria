# Solución 3: Sumar dos entradas

[Enunciado y teoría](../../ejercicio3/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

El valor `.value` de un campo es una cadena, incluso con `type="number"`. El operador `+` concatena cadenas: `"2" + "3"` produce `"23"`. `Number()` convierte una cadena completa a número. Una cadena vacía se convierte en cero, por eso hay que comprobarla antes.

## Verificación

- 2 y 3 muestran 5; -2 y 0.5 muestran -1.5.
- Un campo vacío muestra Completa los dos números.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio3/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
