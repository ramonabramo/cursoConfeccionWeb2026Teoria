# Temario: programación JavaScript en el cliente

El objetivo es construir páginas interactivas que lean datos, actualicen el DOM y consuman recursos HTTP con una gestión clara del estado y de los errores. El recorrido combina fundamentos del lenguaje y APIs del navegador. Las carpetas `basicos` y `avanzados` tienen soluciones equivalentes dentro de su subcarpeta `soluciones`.

## 1. Entorno del navegador y herramientas

- Papel de HTML, CSS y JavaScript; cliente y servidor; recurso estático frente a API.
- Enlace de scripts, `defer`, consola, errores, puntos de interrupción y panel Network.
- DOM, selectores, lectura y escritura de texto; origen y ejecución por HTTP local.

Prácticas: [B1](basicos/ejercicio1/README.md), [A1](avanzados/ejercicio1/README.md), [A2](avanzados/ejercicio2/README.md), [A3](avanzados/ejercicio3/README.md), [A4](avanzados/ejercicio4/README.md).

## 2. Datos, variables y expresiones

- `const`, `let`, nombres, comentarios y alcance de bloque y función.
- Tipos primitivos: string, number, boolean, undefined, null; `typeof`.
- Conversión explícita, cadenas de campos, `Number`, `valueAsNumber`, NaN y números finitos.
- Operadores aritméticos, resto, precedencia, comparación estricta y operadores lógicos.
- Plantillas de cadena, redondeo para presentación y límites de coma flotante.

Prácticas: [B2](basicos/ejercicio2/README.md), [B3](basicos/ejercicio3/README.md), [B4](basicos/ejercicio4/README.md), [B7](basicos/ejercicio7/README.md), [B10](basicos/ejercicio10/README.md). `querySelector` sin coincidencia devuelve null; una búsqueda con find sin coincidencia devuelve undefined, como se comprueba en [A22](avanzados/ejercicio22/README.md).

## 3. Decisiones y validación

- `if`, `else if`, `else`, ternario y `switch`.
- Umbrales y extremos, condiciones compuestas y retorno temprano.
- Validación antes de calcular; reglas de interfaz frente a permisos reales de servidor.

Prácticas: [B6](basicos/ejercicio6/README.md), [B7](basicos/ejercicio7/README.md), [B8](basicos/ejercicio8/README.md), [B9](basicos/ejercicio9/README.md), [B10](basicos/ejercicio10/README.md).

## 4. Funciones y organización de programas

- Declaración, parámetros, valores por defecto, llamadas y `return`.
- Funciones anónimas, flecha y callbacks; paso de referencia a una función.
- Variables locales, estado compartido y cierres (closures).
- Separación de entrada, procesamiento y presentación; reutilización y depuración.

Prácticas: [B5](basicos/ejercicio5/README.md), [B11](basicos/ejercicio11/README.md), [B18](basicos/ejercicio18/README.md), [A18](avanzados/ejercicio18/README.md), [A20](avanzados/ejercicio20/README.md), [A26](avanzados/ejercicio26/README.md).

## 5. Cadenas, bucles y arrays

- `trim`, mayúsculas, minúsculas, longitud y comparación de cadenas.
- `for`, `while`, `for...of`; contadores, acumuladores y límites seguros.
- Arrays, índices desde cero, length, push/pop, unshift/shift, join, includes e indexOf.
- Recorrido con forEach; diferencias entre Array y NodeList.
- Estadísticas, listas en memoria y casos vacíos.

Prácticas: [B12](basicos/ejercicio12/README.md), [B14](basicos/ejercicio14/README.md), [B15](basicos/ejercicio15/README.md), [B16](basicos/ejercicio16/README.md), [B17](basicos/ejercicio17/README.md), [B18](basicos/ejercicio18/README.md); [A6](avanzados/ejercicio6/README.md) a [A10](avanzados/ejercicio10/README.md), [A13](avanzados/ejercicio13/README.md), [A14base](avanzados/ejercicio14base/README.md), [A14](avanzados/ejercicio14/README.md), [A18](avanzados/ejercicio18/README.md).

## 6. DOM, eventos, formularios y accesibilidad

- querySelector/querySelectorAll, textContent, createElement, append y replaceChildren.
- classList, style y hidden; construir una interfaz desde el estado.
- click, input, change, submit y keydown; objeto evento, target/currentTarget y preventDefault.
- Burbujeo, delegación, closest y dataset; identidad estable de elementos dinámicos.
- Formularios: required, email, límites, reportValidity, mensajes y foco.
- Controles nativos, uso con teclado y atributos aria-pressed/aria-expanded.
- Diferencia entre insertar texto y HTML; evitar interpretar datos externos con innerHTML.

Prácticas: [B13](basicos/ejercicio13/README.md), [B14](basicos/ejercicio14/README.md), [B19](basicos/ejercicio19/README.md), [B20](basicos/ejercicio20/README.md), [A5](avanzados/ejercicio5/README.md), [A11](avanzados/ejercicio11/README.md), [A12](avanzados/ejercicio12/README.md), [A12A](avanzados/ejercicio12A/README.md), [A15](avanzados/ejercicio15/README.md), [A16](avanzados/ejercicio16/README.md), [A17](avanzados/ejercicio17/README.md), [A19](avanzados/ejercicio19/README.md), [A20](avanzados/ejercicio20/README.md), [A23](avanzados/ejercicio23/README.md).

## 7. Objetos y colecciones de datos

- Objetos literales, propiedades, acceso por punto/corchetes, métodos y this.
- Referencias, copia superficial con spread y desestructuración.
- Arrays de objetos frente a arrays paralelos.
- filter, map, find, reduce y sort; mutación y copia; some/every.
- Identificadores y operaciones de alta, consulta, cambio y borrado en memoria.

Prácticas: [A21](avanzados/ejercicio21/README.md), [A22](avanzados/ejercicio22/README.md), [A23](avanzados/ejercicio23/README.md). Compara con los arrays paralelos de [A19](avanzados/ejercicio19/README.md).

## 8. JSON, errores, persistencia y fechas

- Formato JSON, stringify y parse; validación del esquema recibido.
- throw, Error/TypeError, try/catch y mensajes recuperables.
- localStorage por origen; claves propias, recuperación y fallos de almacenamiento.
- Date, calendario local frente a UTC; días de calendario y cambios de horario.
- Formato de fechas y moneda con Intl.

Prácticas: [A24](avanzados/ejercicio24/README.md), [A25](avanzados/ejercicio25/README.md), [A31](avanzados/ejercicio31/README.md).

## 9. Asincronismo en el navegador

- Código síncrono, tareas, microtareas y capacidad de respuesta de la interfaz.
- setTimeout/setInterval, cancelación y límites de precisión de temporizadores.
- Promise, estados, resolve/reject, then/catch/finally y propagación de errores.
- async/await con try/catch/finally; secuencia frente a concurrencia con Promise.all.
- Estados de carga y prevención de operaciones duplicadas.

Prácticas: [A26](avanzados/ejercicio26/README.md), [A27](avanzados/ejercicio27/README.md), [A28](avanzados/ejercicio28/README.md).

## 10. HTTP, fetch y navegación del cliente

- URL y origen; método GET, códigos de estado, response.ok y lectura asíncrona de JSON.
- Error de red frente a error HTTP, JSON inválido y estructura incorrecta.
- Estados de éxito, vacío, error y reintento; panel Network.
- AbortController y protección ante respuestas antiguas.
- URLSearchParams y history.replaceState para conservar una búsqueda en la URL.
- CORS es una política del navegador y del servidor: no se desactiva desde el cliente con no-cors.

Prácticas: [A29](avanzados/ejercicio29/README.md), [A30](avanzados/ejercicio30/README.md), [A32](avanzados/ejercicio32/README.md). Los recursos de lectura son JSON locales; no se necesita una API externa. POST/PUT/PATCH/DELETE y autenticación quedan como ampliación con un servidor de pruebas adecuado, no como una petición que un servidor estático pueda aceptar.

## 11. Módulos, clases e integración

- type="module", import/export, rutas relativas y ámbito de módulo.
- Clase, instancia, métodos compartidos por prototipo, campos privados y getters.
- División entre modelo, acceso a datos, almacenamiento y DOM.
- Proyecto final con carga HTTP, filtros, favoritos persistentes y errores recuperables.

Prácticas: [A31](avanzados/ejercicio31/README.md), [A32](avanzados/ejercicio32/README.md).

## Comprobación del aprendizaje

Para dar una práctica por terminada, debe cumplir su enunciado, gestionar entradas vacías y límites, funcionar al repetir acciones y no producir errores inesperados de consola. Explica el estado inicial, cada evento y el efecto sobre los datos antes de presentar la salida. En las prácticas asíncronas prueba tanto el éxito como el fallo y el reintento.

El [cuestionario básico](basicos/ejercicio20/README.md) integra los fundamentos. El [catálogo final](avanzados/ejercicio32/README.md) integra las APIs del navegador. Una ampliación personal puede añadir ordenación, edición o pruebas automatizadas de las funciones de cálculo, manteniendo el código y sus responsabilidades claros.

[Introducción](README.md) · [Índice de básicos](basicos/README.md) · [Índice de avanzados](avanzados/README.md)
