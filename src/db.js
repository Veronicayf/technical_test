require('dotenv').config();
const { Sequelize } = require('sequelize');
const taskModel = require('./modules/tasks/models/task.model');
const userModel = require('./modules/authenticator/models/user.model');
const userTaskModel = require('./modules/authenticator/models/userTask.model')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/task`,
    { logging: false }
);

taskModel(sequelize);
userModel(sequelize);
userTaskModel(sequelize);

const { Task, User, UserTask } = sequelize.models;

module.exports = {
    Task,
    User,
    UserTask,
    conn: sequelize,
};