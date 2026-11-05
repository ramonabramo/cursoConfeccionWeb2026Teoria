# Solución 24: Notas persistentes con JSON

[Enunciado y teoría](../../ejercicio24/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`localStorage` guarda cadenas por origen (protocolo, host y puerto) y puede conservarlas entre recargas. `JSON.stringify()` serializa datos compatibles con JSON y `JSON.parse()` los recupera. JSON no conserva funciones, métodos ni prototipos de clases. Una cadena parseada correctamente todavía puede tener una estructura incorrecta: valídala.

## Verificación

- Añade una nota y recarga: sigue visible; borrar y recargar deja la lista vacía.
- En consola guarda JSON inválido en esa clave y recarga: aparece un aviso sin detener la página. Prueba también un objeto en lugar del array.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio24/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
