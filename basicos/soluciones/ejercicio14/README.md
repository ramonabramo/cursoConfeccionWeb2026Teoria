# Solución 14: Tabla de multiplicar

[Enunciado y teoría](../../ejercicio14/README.md) · [Índice de soluciones](../README.md)

## Cómo leer esta solución

Primero identifica los datos y las referencias al DOM en `app.js`. Después sigue cada evento y observa cómo el cálculo o el cambio de estado termina en la presentación. Compara esta implementación con tus decisiones; hay varias soluciones correctas.

El bucle `for` tiene inicialización, condición y actualización. Antes de cada vuelta se comprueba la condición. Un límite equivocado puede omitir el último elemento o crear un bucle infinito. En esta tabla queremos los multiplicadores de 1 a 10, incluidos.

## Verificación

- 7 genera diez filas, desde 7 × 1 = 7 hasta 7 × 10 = 70.
- Generar dos veces sigue dando diez filas; vacío limpia la lista y avisa.

Arranca el servidor desde la raíz y abre `http://localhost:8000/basicos/soluciones/ejercicio14/`. La solución incluye su propio HTML, CSS y datos para poder ejecutarse por separado. No copies solo `app.js` si hay módulos o archivos auxiliares.
