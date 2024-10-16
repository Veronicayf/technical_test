const express = require('express');
const server = express();
const morgan = require('morgan');
const taskRoutes = require('./modules/tasks/routes/task.routes')
const authRoutes = require('./modules/authenticator/routes/auth.routes')
const cors = require('cors');


server.use(morgan('dev'))
server.use(express.json());

// CORS
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

server.use(cors(corsOptions));

server.use('/task', taskRoutes);
server.use('/auth', authRoutes);

module.exports = server