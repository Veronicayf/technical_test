require('dotenv').config();
const { Sequelize } = require('sequelize');
const taskModel = require('./models/task.model');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/task`,
    { logging: false }
);

taskModel(sequelize); // Inicializar el modelo

const { Task } = sequelize.models; // Extraer el modelo Task

module.exports = {
    Task, // Exportar el modelo Task
    conn: sequelize, // Exportar la conexión a la base de datos
};