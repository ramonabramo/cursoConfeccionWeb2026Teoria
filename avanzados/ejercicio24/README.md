# Ejercicio 24: Notas persistentes con JSON

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 23](../ejercicio23/README.md).

## Teoría que necesitas

`localStorage` guarda cadenas por origen (protocolo, host y puerto) y puede conservarlas entre recargas. `JSON.stringify()` serializa datos compatibles con JSON y `JSON.parse()` los recupera. JSON no conserva funciones, métodos ni prototipos de clases. Una cadena parseada correctamente todavía puede tener una estructura incorrecta: valídala.

La lectura, la escritura y el parseo pueden fallar. Usa `try/catch` para presentar el problema y permitir seguir trabajando en memoria. Nunca guardes contraseñas ni secretos aquí. El almacenamiento de `localhost:8000` es distinto al de `127.0.0.1:8000`. El ejercicio utiliza una clave propia y su botón de borrado solo afecta a esa clave, no a todos los datos del origen.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
localStorage.setItem("curso-ejemplo", JSON.stringify(["Repasar"]));
const datos = JSON.parse(localStorage.getItem("curso-ejemplo") ?? "[]");
```

## Enunciado

1. Guarda un array de cadenas no vacías en la clave curso-js-ejercicio24.
2. Al cargar, recupera las notas, verifica su estructura y presenta una lista segura.
3. Captura errores de JSON y almacenamiento. Si falla guardar, conserva las notas en memoria y avisa. El borrado usa removeItem de esa clave.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio24/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- Añade una nota y recarga: sigue visible; borrar y recargar deja la lista vacía.
- En consola guarda JSON inválido en esa clave y recarga: aparece un aviso sin detener la página. Prueba también un objeto en lugar del array.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio24/README.md) · [Volver al índice](../README.md)
