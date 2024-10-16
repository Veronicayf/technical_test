# Backend del Proyecto Aplicación de gestión de tareas

Este es el backend del proyecto desarrollado con [tecnologías utilizadas, como Node.js, Express, Sequelize.]. Este backend gestiona la autenticación de usuarios y el manejo de tareas.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Endpoints API](#endpoints-api)
- [Manejo de Errores](#manejo-de-errores)
- [Reto del Proyecto](#reto-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio-backend.git
cd tu-repositorio-backend
```
## 2. Instalar dependencias
Usa NVM para asegurarte de que tienes la versión correcta de Node.js:
``` bash
nvm use
npm install
```
## 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example` que incluya la siguiente configuración:

```bash
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/tu-base-de-datos
DB_USER=YOUR-USER
DB_PASSWORD=YOUR-PASSWORD
DB_HOST=localhost
DB_PORT=PORT

JWT_SECRET=tu-SuperSecret-Key
```
* **DATABASE_URL:** La URL de conexión a tu base de datos PostgreSQL. Asegúrate de reemplazar usuario, contraseña, y tu-base-de-datos con los valores adecuados para tu configuración.

## Endpoints API
Aquí están algunos de los principales endpoints disponibles:

### Autenticación
**POST /api/auth/register:** Registra un nuevo usuario.
* Cuerpo de la petición:
```bash
{
  "email": "usuario@ejemplo.com",
  "password": "tu_contraseña"
}
```
**POST /api/auth/login:** Inicia sesión con un usuario existente.
* Cuerpo de la petición: 
```bash
{
  "email": "usuario@ejemplo.com",
  "password": "tu_contraseña"
}
```

## Manejo de Tareas
* **GET /api/tasks:** Obtiene todas las tareas del usuario autenticado.
* **POST /api/tasks:** Crea una nueva tarea.
* Cuerpo de la peticion:
```bash
{
  "titulo": "Nueva tarea",
  "review": "Descripción de la tarea"
}
```
* **PUT /api/tasks/:id:** Actualiza el estatus de una tarea específica.
* **DELETE /api/tasks/:id:** Elimina una tarea específica.

## Manejo de Errores
El backend maneja errores comunes y devuelve respuestas con códigos de estado HTTP apropiados. En caso de error, se devolverá un mensaje descriptivo en formato JSON.

## Reto del Proyecto

Uno de los principales desafíos fue implementar el sistema de autenticación con JWT. Esto incluyó la creación de middleware para proteger rutas y asegurar que solo los usuarios autenticados pudieran acceder a ciertos endpoints.

El proceso también implicó gestionar la creación y verificación de tokens, así como mantener la seguridad de las contraseñas a través de la encriptación.

Este proyecto está en desarrollo y acepto colaboraciones y sugerencias sobre cómo afrontar los desafíos que he encontrado.

## Tecnologías Utilizadas

* **Node.js:** Entorno de ejecución para JavaScript.
* **Express:** Framework para construir aplicaciones web.


* **JWT:** Para autenticación de usuarios.
* **bcrypt:** Para encriptar contraseñas.

## Enlace Frontend
**URL del Frontend:** [Technical_Test_Front](https://github.com/Veronicayf/technical_Test_front.git)

