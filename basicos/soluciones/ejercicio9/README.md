# Solución 9: Menú de operaciones

[Enunciado y teoría](../../ejercicio9/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`switch` compara una expresión con varios casos usando igualdad estricta. Cada `case` representa un valor concreto; `break` termina la selección y evita continuar al caso siguiente. `default` atiende valores no contemplados.

## Verificación

- 8 y 2 producen 10, 6, 16 o 4 según la opción.
- Dividir 8 entre 0 muestra No se puede dividir entre cero.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio9/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
