# Solución 10: Permiso de acceso

[Enunciado y teoría](../../ejercicio10/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

Los booleanos expresan dos estados. `&&` exige que se cumplan ambas condiciones, `||` acepta que se cumpla al menos una y `!` invierte un valor booleano. Los paréntesis ayudan a expresar la regla sin depender de recordar precedencias.

## Verificación

- 17 con autorización y normas: permitido.
- 18 sin aceptar normas: denegado; 17 sin autorización: denegado.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio10/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
