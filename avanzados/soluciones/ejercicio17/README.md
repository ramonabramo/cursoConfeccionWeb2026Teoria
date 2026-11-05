# Solución original 17: La máquina de escribir

[Enunciado y teoría](../../ejercicio17/README.md) · [Índice](../README.md)

## Lectura guiada

El objeto de un evento `keydown` ofrece `.key`: puede contener un carácter o nombres como Enter y Backspace. Una bandera booleana recuerda el modo mayúsculas entre eventos. Las teclas modificadoras no deben añadirse al texto como palabras.

Escuchar en window afecta a toda la página. En una ampliación, limita la captura a una zona y respeta atajos de Ctrl/Meta y campos editables. `preventDefault()` debe usarse solo cuando estés sustituyendo una acción concreta. El original practica cadenas y estados, no un editor completo con composición de texto e internacionalización.

Identifica las referencias al DOM, el estado y los eventos en `app.js`. Sigue una interacción de principio a fin y compara con tu implementación. Los archivos de esta solución se conservan sin modificaciones; cuando hay variantes adicionales de JavaScript, el HTML indica cuál se ejecuta.

## Comprobaciones

- Escribe letras, usa Enter y Backspace y observa el contador.
- Alterna mayúsculas y limpia; teclas como Shift no deben escribirse como texto.

Ejecuta con el [servidor del curso](../../../README.md) y abre `http://localhost:8000/avanzados/soluciones/ejercicio17/`.
