# Proyecto Node.js con Express
Este proyecto consiste en un API RESTful para gestionar tareas. Utiliza Express como framework de servidor, Sequelize como ORM para la base de datos, y está estructurado de manera modular para facilitar el mantenimiento y escalabilidad.

## Cómo abordé la prueba
Mi enfoque principal fue diseñar una API clara y organizada para realizar operaciones de creación, lectura, actualización y eliminación de tareas (CRUD). Implementé las rutas usando Express y dividí el código en controladores para cada operación del CRUD, asegurando modularización y mantenibilidad. Además, incorporé el manejo de errores adecuado y el uso de variables de entorno.

## Pasos para crear el proyecto en local

1. **Clona el repositorio:**
```bash
git clone https://github.com/Veronicayf/technical_test.git
```

2. **Instala Node.js utilizando NVM:**
Si no tienes NVM (Node Versión Manager) instalado, sigue los pasos en su [documentacion oficial](https://github.com/nvm-sh/nvm#installing-and-updating), Luego, para instalar la versión correcta de Node.js:
```bash
nvm install <version> (la versión mas actualizada puede ser de la 18 en adelante)
nvm use <version> (la versión mas actualizada puede ser de la 18 en adelante)
```

3. **Instala las dependencias del proyecto:**
Ejecuta el siguiente comando para instalar todas las dependencias necesarias desde el archivo ```package.json```:
```bash
npm install
```

4.**Configura el archivo .env:**
Crea un archivo ```.env``` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes basarte en el siguiente ejemplo:
```bash
PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=password
DB_NAME=testdb
```

5.**Inicia el servidor:**
Ejecuta el siguiente comando para iniciar el servidor en modo de desarrollo:
```bash
npm start
```
El servidor se ejecutará en ```http://localhost:3000``` si usas la configuración por defecto.

6.**Pruebas de las rutas de la API:**
Puedes usar herramientas como ```Postman``` o ```Insomnia``` para interactuar con las siguientes rutas:

* ```GET /tasks``` - Obtener todas las tareas.
* ```GET /task/:id``` - Obtener una tarea por su ID.
* ```POST /task``` - Crear una nueva tarea.
* ```PUT /task/:id``` - Actualizar una tarea por su ID.
* ```DELETE /task/:id``` - Eliminar una tarea.

## Uso de NVM y Node.js
El uso de NVM (Node Version Manager) asegura que puedas gestionar múltiples versiones de Node.js en tu máquina de desarrollo. Esto es útil para mantener compatibilidad entre proyectos que pueden requerir distintas versiones de Node. Para este proyecto, utilice Node.js versión 20.18.0.

## Retos y cómo los resolví

* **Modularización de rutas:** Uno de los retos fue la modularización adecuada de las rutas y controladores para mantener el código ordenado y fácil de mantener. Para solucionarlo, creé controladores individuales para cada operación del CRUD y los importé en un archivo de rutas único.

* **Manejo de errores:** Implementé un manejo de errores robusto tanto a nivel de rutas como de controladores. En caso de fallos en las consultas a la base de datos o en la validación de los datos de entrada, el servidor devuelve respuestas con códigos de estado HTTP adecuados (como 404 o 500).

* **Variables de entorno:** Configurar las variables de entorno correctamente fue clave para garantizar que los valores sensibles como las credenciales de la base de datos no estuvieran en el código fuente. Esto también facilita la configuración del entorno en diferentes máquinas.






      

      




