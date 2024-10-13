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

### 4. Scripts de NPM

En el archivo `package.json` se ha añadido un script de inicio para facilitar el arranque del servidor con **Nodemon**.

```json
"scripts": {
  "start": "nodemon ./src/index.js"
}

Para iniciar el servidor, simplemente ejecuta:
npm start



### Rutas API

GET /task: Obtiene todas las tareas.
GET /task/:id: Obtiene una tarea específica por ID.
POST /task: Crea una nueva tarea.
PUT /task/:id: Actualiza una tarea existente por ID.
DELETE /task/:id: Elimina una tarea por ID.


### Controladores

Los controladores son responsables de manejar la lógica de negocio para cada ruta. La modularización mejora la mantenibilidad y la organización del código.

get.controller: Controlador para obtener tareas.
post.controller: Controlador para crear tareas.
update.controller: Controlador para actualizar tareas.
delete.controller: Controlador para eliminar tareas.


### Variables de Entorno

Las variables de entorno son importantes para:

Configuración Segura: Mantienen la información sensible (como credenciales de base de datos) fuera del código fuente.
Facilidad de Configuración: Permiten cambiar la configuración sin modificar el código, haciendo el entorno de desarrollo y producción más flexible.
Mejor Mantenibilidad: Ayudan a mantener el código limpio y fácil de entender, separando la lógica de negocio de la configuración.