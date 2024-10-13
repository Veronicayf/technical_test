# Proyecto Node.js con Express
Este proyecto consiste en un API RESTful para gestionar tareas. Utiliza Express como framework de servidor, Sequelize como ORM para la base de datos, y está estructurado de manera modular para facilitar el mantenimiento y escalabilidad.

## Cómo abordé la prueba
Mi enfoque principal fue diseñar una API clara y organizada para realizar operaciones de creación, lectura, actualización y eliminación de tareas (CRUD). Implementé las rutas usando Express y dividí el código en controladores para cada operación del CRUD, asegurando modularización y mantenibilidad. Además, incorporé el manejo de errores adecuado y el uso de variables de entorno.

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
   ```

### 2. Instalación de Dependencias

1. **Instalar Express:**
```bash
npm install express
```

2. **Instalar Nodemon (opcional, pero recomendado para desarrollo):**
```bash
npm install -g nodemon
```

### 3. Scripts de NPM

En el archivo `package.json` se ha añadido un script de inicio para facilitar el arranque del servidor con **Nodemon**.

```json
"scripts": {
  "start": "nodemon ./src/index.js"
}
```

### 4. Levantar el servidor

Para iniciar el servidor, usa el siguiente comando:
```bash
npm start
```



