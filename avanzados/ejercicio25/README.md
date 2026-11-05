# Ejercicio 25: Fechas y formato local

## Objetivo y conocimientos previos

Aplica los conceptos de esta guía construyendo la interacción descrita. Requisitos: [Ejercicio 24](../ejercicio24/README.md).

## Teoría que necesitas

`Date` representa un instante y ofrece métodos para leerlo en hora local o UTC. El valor de un input de fecha tiene forma `AAAA-MM-DD`. Interpretar directamente esa cadena con `new Date(valor)` usa UTC; para una fecha del calendario local puedes añadir `T00:00:00`.

`Intl.DateTimeFormat` y `Intl.NumberFormat` presentan datos según idioma y opciones. No calcules días de calendario dividiendo siempre la distancia entre medianoches locales: un cambio de horario puede producir días de 23 o 25 horas. En esta práctica transforma año, mes y día de ambos calendarios a UTC y compara esos valores normalizados. No estamos calculando horas exactas restantes para un evento.

Ejemplo independiente (adáptalo; no resuelve toda la práctica):

```js
const fecha = new Date("2030-06-15T00:00:00");
console.log(new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(fecha));
```

## Enunciado

1. Lee una fecha válida y preséntala con Intl.DateTimeFormat en español.
2. Compara con la fecha local de hoy usando Date.UTC de sus componentes de calendario.
3. Muestra Hoy, Faltan N días o Pasaron N días según corresponda.

## Archivos y ejecución

`index.html` y `main.css` proporcionan la interfaz. Completa las tareas de `app.js` sin cambiar los identificadores del HTML.

Desde la raíz del repositorio ejecuta `python -m http.server 8000 --bind 127.0.0.1` y abre `http://localhost:8000/avanzados/ejercicio25/`. Consulta [la puesta en marcha](../../README.md). No necesitas paquetes npm ni un servidor de aplicación.

## Comprueba tu trabajo

- La fecha de hoy muestra Hoy y mañana muestra Faltan 1 días.
- Una fecha anterior indica los días pasados; vacío da un aviso. Prueba fechas próximas a un cambio de horario.
- Abre la consola y comprueba que no hay errores. Prueba también el teclado y repetir las acciones.

## Entrega y reflexión

Entrega los archivos y explica qué datos entran, cómo cambian y dónde se muestran. Como ampliación, añade un caso de prueba propio y justifica su resultado antes de ejecutarlo.

[Ver solución comentada](../soluciones/ejercicio25/README.md) · [Volver al índice](../README.md)
