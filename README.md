# Proyecto Node.js con Express

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

