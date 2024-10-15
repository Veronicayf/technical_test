const { Router } = require('express');
const { getTasks } = require('../controllers/get.controller/get.controller');
const { getCompletedTask } = require('../controllers/get.controller/getCompletedTask.controller')
const { createTask } = require('../controllers/post.controller/create.controller');
const { deleteTask } = require('../controllers/delete.controller/delete.controller');
const { updateTask } = require('../controllers/update.controller/update.controller');

const router = Router();


//definicion de rutas
router.get('/completed', getCompletedTask)
router.get('/', getTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)
module.exports = router

