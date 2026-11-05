# Solución 21: Objetos: una ficha de estudiante

[Enunciado y teoría](../../ejercicio21/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Un objeto agrupa propiedades relacionadas mediante pares clave–valor. Puedes leer `persona.nombre` o `persona[clave]`. Una propiedad también puede contener una función: un método. Dentro de un método llamado como `persona.presentarse()`, `this` se refiere al objeto receptor. Usa sintaxis de método, no una flecha, si necesitas ese `this`.

## Verificación

- Al cargar se ve Ana: 0 puntos; dos pulsaciones dan 2 puntos.
- Un nombre vacío se rechaza; la copia conserva los puntos del momento en que se creó.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio21/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
