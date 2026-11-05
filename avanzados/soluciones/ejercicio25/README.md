# Solución 25: Fechas y formato local

[Enunciado y teoría](../../ejercicio25/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

`Date` representa un instante y ofrece métodos para leerlo en hora local o UTC. El valor de un input de fecha tiene forma `AAAA-MM-DD`. Interpretar directamente esa cadena con `new Date(valor)` usa UTC; para una fecha del calendario local puedes añadir `T00:00:00`.

## Verificación

- La fecha de hoy muestra Hoy y mañana muestra Faltan 1 días.
- Una fecha anterior indica los días pasados; vacío da un aviso. Prueba fechas próximas a un cambio de horario.

Arranca el servidor desde la raíz y abre `http://localhost:8000/avanzados/soluciones/ejercicio25/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
