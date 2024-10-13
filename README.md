# Proyecto Node.js con Express

Este proyecto consiste en un API RESTful para gestionar tareas. Utiliza Express como framework de servidor, Sequelize como ORM para la base de datos, y está estructurado de manera modular para facilitar el mantenimiento y escalabilidad.

## Instalación

### 1. Instalación de Node.js usando NVM

1. **Instalar NVM:**
   - En Windows, descarga [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).

2. **Instalar Node.js con NVM:**
   - Para instalar Node.js versión 16.14.2:
     ```bash
     nvm install 16.14.2
     nvm use 16.14.2
     ```
   - Para hacer que esta versión sea la predeterminada:
     ```bash
     nvm alias default 16.14.2
     ```

3. **Verificar la instalación de Node.js:**
   ```bash
   node -v

### 2. Instalación de Dependencias

1. **Instalar Express:**
npm install express

2. **Instalar Nodemon (opcional, pero recomendado para desarrollo):**
npm install -g nodemon

### 3. Levantar el servidor

Para iniciar el servidor, usa el siguiente comando:
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