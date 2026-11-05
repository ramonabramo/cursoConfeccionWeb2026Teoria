# JavaScript en el cliente: curso práctico

Aprende a programar el comportamiento de páginas web con JavaScript en el navegador: desde variables y funciones hasta interfaces con DOM, formularios, objetos, almacenamiento y peticiones HTTP asíncronas.

El curso está orientado a JavaScript sin frameworks. HTML proporciona la estructura, CSS el aspecto y JavaScript la interacción. No necesitas conocimientos previos de JavaScript; sí saber crear una página HTML sencilla, enlazar una hoja de estilos y reconocer selectores CSS.

## Empieza aquí

1. Lee el [temario y su recorrido por prácticas](TEMARIO.md).
2. Resuelve los [20 ejercicios básicos](basicos/README.md) en orden.
3. Continúa con los [avanzados](avanzados/README.md): la colección original y 12 ejercicios nuevos sobre los temas que faltaban.
4. Consulta las soluciones después de intentarlo y comprueba los casos del README de cada ejercicio.

## Organización

```text
teoria/
├── README.md                  Introducción y puesta en marcha
├── TEMARIO.md                 Contenidos y prácticas asociadas
├── basicos/
│   ├── README.md              Índice de 20 prácticas
│   ├── ejercicio1/ … ejercicio20/
│   └── soluciones/
│       ├── README.md
│       └── ejercicio1/ … ejercicio20/
└── avanzados/
    ├── README.md
    ├── ejercicio1/ … ejercicio20/   Colección original intacta
    ├── ejercicio12A/                Variante original
    ├── ejercicio14base/             Variante original
    ├── ejercicio21/ … ejercicio32/  Ampliación nueva
    └── soluciones/                  Misma estructura por ejercicio
```

Cada ejercicio nuevo incluye un `README.md` con teoría, ejemplo, enunciado y pruebas manuales; `index.html` y `main.css` preparados; y `app.js` con tareas. Su solución tiene su propio HTML, CSS, JavaScript y, cuando procede, módulos y JSON. Puedes estudiar cada carpeta de forma independiente.

Los archivos existentes de ejercicios y soluciones solo se han movido a `avanzados`; no se han corregido ni reescrito. Se han añadido guías README y una solución para la variante 12A, que no tenía. La colección original combina ejemplos resueltos y plantillas con tareas pendientes; sus comentarios siguen siendo la referencia del enunciado. Consulta la guía de 12A para su particularidad de carga del script.

## Ejecutar las prácticas

Necesitas un navegador moderno y un editor. Abre la consola y las herramientas de desarrollo con F12 (o el menú del navegador). Usa las pestañas Console, Sources y Network para observar valores, pausar la ejecución e inspeccionar peticiones.

Abre una terminal en la raíz del repositorio y, si tienes Python 3, ejecuta:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Si en Windows Python se invoca como `py`, usa `py -m http.server 8000 --bind 127.0.0.1`. Detén el servidor con Ctrl+C.

Abre estas direcciones en tu navegador:

- Primer ejercicio: <http://localhost:8000/basicos/ejercicio1/>
- Su solución: <http://localhost:8000/basicos/soluciones/ejercicio1/>
- Primer fetch: <http://localhost:8000/avanzados/ejercicio29/>
- Proyecto final resuelto: <http://localhost:8000/avanzados/soluciones/ejercicio32/>

También puedes usar un servidor de desarrollo estático de tu editor. Sirve siempre la raíz del repositorio. `fetch` y los módulos requieren HTTP; no abras esos ejercicios con `file://`. Python solo sirve archivos de apoyo: el código del curso se ejecuta en el navegador. No hay instalación de npm, compilación, claves API ni backend.

Mantén el mismo host y puerto para comprobar la persistencia: `localhost` y `127.0.0.1` son orígenes distintos. Los ejercicios 24 y 32 usan claves propias de `localStorage`. Los JSON de pruebas están incluidos y las prácticas nuevas funcionan sin servicios externos. El JSON mal formado del ejercicio 29 es deliberado para practicar errores.

## Forma de trabajo

1. Lee la teoría y escribe con tus palabras qué debe ocurrir.
2. Identifica entradas, estado, procesamiento y salida.
3. Completa una tarea cada vez. Observa valores con consola y puntos de interrupción.
4. Prueba los ejemplos, los límites, los campos vacíos y las acciones repetidas.
5. Explica tu solución y compara con la propuesta. Trabaja sobre una copia si quieres conservar la plantilla inicial.

Usa `const` por defecto y `let` cuando debas reasignar. Separa cálculos y DOM, escribe funciones con una responsabilidad clara y utiliza `textContent` para datos de usuario o de red. Comprueba errores de HTTP, JSON y almacenamiento. Valida también el estado vacío y utiliza botones y formularios que funcionen con teclado.

## Referencias para ampliar

- [MDN: guía de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [MDN: trabajar con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN: usar promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
- [MDN: uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: módulos JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
