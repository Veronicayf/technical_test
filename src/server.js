const express = require('express');
const server = express();
const morgan = require('morgan');
const taskRoutes = require('./modules/tasks/routes/task.routes')
const authRoutes = require('./modules/authenticator/routes/auth.routes')

server.use(morgan('dev'))
server.use(express.json());

//middleware de Corse
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

server.use('/task', taskRoutes);
server.use('/auth', authRoutes);

module.exports = server