# Solución 19: Formulario de inscripción

[Enunciado y teoría](../../ejercicio19/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Los formularios emiten `submit` al enviar mediante un botón o con Enter. `event.preventDefault()` evita la navegación por defecto y permite procesar los datos en cliente. Escuchar únicamente el click del botón deja fuera otras formas de envío.

## Verificación

- Ana, ana@example.com y aceptación → confirmación sin recarga.
- Nombre con espacios, email sin @ o casilla sin marcar no confirman; Enter también envía.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio19/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
