# Template para práctica: Aplicación de Lista de Tareas con MongoDB y Node.js

Template para práctica MongoDB, incluyendo la conexión a la base de datos,
operaciones CRUD básicas, modelado de datos y consultas avanzadas

**Objetivo:** Crear una aplicación simple de lista de tareas que utilice MongoDB
para almacenar y recuperar datos.

Pasos:

**Sesión 1 - Configuración del Proyecto y Conexión a MongoDB:**

1.1. Configura un nuevo proyecto de Node.js.

```bash
mkdir app-tareas
cd app-tareas
npm init -y
```

1.2. Instala las dependencias necesarias, como express y mongodb.

```bash
npm install express mongoose
```

1.3. Conéctate a una base de datos MongoDB local o en la nube.

**Sesión 2 - Modelado de Datos y Operaciones CRUD Básicas:**

2.1. Define un esquema para las tareas que incluya campos como `title`,
`description`, y `completed`.

2.2. Crea rutas en tu aplicación Express para realizar operaciones CRUD básicas
(Crear, Leer, Actualizar, Eliminar) en las tareas.

2.3. Implementa la funcionalidad para agregar, obtener, actualizar y eliminar
tareas en la base de datos.

**Sesión 3 - Consultas Avanzadas y Validación:**

3.1. Agrega un campo de fecha de creación a tu esquema de tareas.

3.2. Implementa una consulta que devuelva todas las tareas creadas en las
últimas 24 horas.

3.3. Añade validación a tu aplicación para asegurarte de que las tareas cumplan
con ciertos criterios antes de ser almacenadas en la base de datos.

**Sesión 4 - Rutas y Controladores Avanzados:**

4.1. Crea una ruta que devuelva todas las tareas completadas.

4.2. Implementa un controlador que permita marcar una tarea como completada.

4.3. Expone una API que permita buscar tareas por palabra clave.

**Sesión 5 - Seguridad y Despliegue:**

5.1. Añade autenticación básica a tu aplicación para proteger las rutas
sensibles.

5.2. Despliega tu aplicación en una plataforma como Heroku o MongoDB Atlas.

5.3. Asegúrate de que tu aplicación sigue las mejores prácticas de seguridad y
rendimiento.


Este código extiende la aplicación para incluir una ruta para obtener tareas completadas (`/api/tareas/completadas`), una ruta para marcar tareas como completadas (`/api/tareas/:id/completar`) y una ruta para buscar tareas por palabra clave (`/api/tareas/buscar/:palabra`). Además, se agrega un middleware de autenticación básica para proteger ciertas rutas.
