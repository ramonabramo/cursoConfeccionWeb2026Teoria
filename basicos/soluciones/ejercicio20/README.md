# Solución 20: Reto final básico: cuestionario

[Enunciado y teoría](../../ejercicio20/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Una aplicación pequeña combina datos, estado, funciones, eventos y DOM. En este cuestionario los arrays contienen preguntas y respuestas en posiciones equivalentes. El índice actual indica qué pregunta se muestra y un contador guarda los aciertos.

## Verificación

- const, 0 y click → 3 de 3 (sin distinguir mayúsculas ni espacios exteriores).
- Vacío no avanza; tres incorrectas → 0 de 3; reiniciar permite jugar otra vez.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio20/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
