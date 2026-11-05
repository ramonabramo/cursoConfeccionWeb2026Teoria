# Solución 8: Clasificador de notas

[Enunciado y teoría](../../ejercicio8/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Cuando hay varios casos, encadena `if`, `else if` y `else`. Solo se ejecuta el primer bloque cuya condición resulte verdadera. El orden es fundamental: si pruebas primero `nota >= 5`, una nota de 9 entraría ahí y nunca llegaría a sobresaliente.

## Verificación

- 4.9 Suspenso, 5 Aprobado, 7 Notable, 9 y 10 Sobresaliente.
- -0.1, 10.1 y vacío se rechazan.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio8/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
