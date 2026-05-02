# Tarea: Asincronismo en JavaScript

### 1. ¿Cuál es el funcionamiento de los callbacks?
El funcionamiento principal de los callbacks radica en pasar una función como argumento a otra función, con el objetivo de que se ejecute únicamente cuando una tarea asincrónica haya finalizado. En JavaScript, esto permite que el programa principal no se bloquee. Sin embargo, a nivel crítico, su uso excesivo genera una estructura anidada conocida como "Callback Hell", lo cual dificulta el mantenimiento del código.

### 2. ¿Cómo mejora el uso de promesas?
Las promesas proporcionan una abstracción más limpia y estructurada. Su principal mejora frente a los callbacks es la capacidad de encadenar operaciones utilizando los métodos `.then()` y `.catch()`. Esto aplana la estructura del código, evitando la anidación profunda, y permite centralizar el manejo de errores en un solo bloque.

### 3. ¿Cómo se revolucionó el manejo asincrónico con async y await?
La introducción de `async` y `await` revolucionó JavaScript al permitir que el código asincrónico se lea como si fuera sincrónico y secuencial. Al usar `await`, se pausa la ejecución de esa línea hasta que la promesa se resuelva. Esto elimina la necesidad de encadenar métodos `.then()`, logrando un código intuitivo y permitiendo el uso de bloques `try...catch` tradicionales.

**Fuentes de consulta:**
* MDN Web Docs. *Programación asíncrona en JavaScript*. Recuperado de: https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous