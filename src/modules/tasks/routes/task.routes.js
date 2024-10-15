const { Router } = require('express');
const { getTasks } = require('../controllers/get.controller/get.controller');
const { getCompletedTask } = require('../controllers/get.controller/getCompletedTask.controller')
const { createTask } = require('../controllers/post.controller/create.controller');
const { deleteTask } = require('../controllers/delete.controller/delete.controller');
const { updateTask } = require('../controllers/update.controller/update.controller');
const protect = require('../../authenticator/middleware/auth.middleware')

const router = Router();


//definicion de rutas
router.get('/completed', protect, getCompletedTask)
router.get('/', protect, getTasks)
router.post('/', protect, createTask)
router.delete('/:id', protect, deleteTask)
router.put('/:id', protect, updateTask)
module.exports = router

