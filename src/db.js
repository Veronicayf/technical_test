require('dotenv').config();
const { Sequelize } = require('sequelize');
const taskModel = require('./modules/tasks/models/task.model');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/task`,
    { logging: false }
);

taskModel(sequelize);

const { Task } = sequelize.models;

module.exports = {
    Task,
    conn: sequelize,
};