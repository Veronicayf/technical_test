const { Router } = require('express');
const { getTasks } = require('../controllers/get.controller/get.controller');
const { getTaskById } = require('../controllers/get.controller/getById.controller');
const { createTask } = require('../controllers/post.controller/create.controller');
const { deleteTask } = require('../controllers/delete.controller/delete.controller');
const { updateTask } = require('../controllers/update.controller/update.controller');

const router = Router();


//definicion de rutas
router.get('/', getTasks)
router.get('/:id', getTaskById)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

module.exports = router

