# Ejercicio 10: Permiso de acceso

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 9](../ejercicio9/README.md).

## Teoría que necesitas

Los booleanos expresan dos estados. `&&` exige que se cumplan ambas condiciones, `||` acepta que se cumpla al menos una y `!` invierte un valor booleano. Los paréntesis ayudan a expresar la regla sin depender de recordar precedencias.

La propiedad `.checked` de un checkbox es booleana; su `.value` no indica si está marcado. Esta práctica simula una regla de interfaz: el JavaScript del navegador es visible y modificable por el usuario. Los permisos reales necesitan verificación en el servidor; una condición en cliente no es autenticación.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const puedeEntrar = tieneEntrada && (esAdulto || tienePermiso);
```

## Enunciado

1. Valida la edad de 0 a 120, entera.
2. Permite acceso si acepta las normas Y (tiene al menos 18 años O tiene autorización).
3. Muestra Acceso permitido o Acceso denegado.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/basicos/ejercicio10/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- 17 con autorización y normas: permitido.
- 18 sin aceptar normas: denegado; 17 sin autorización: denegado.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio10/README.md) · [Volver al índice](../README.md)
