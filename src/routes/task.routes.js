const { Router } = require('express');
const { Task } = require('../db')
const router = Router();

//definicion de rutas
router.get('/task', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).send('Error al obtener tareas')
    }
})

router.get('/task/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json(task);
    } catch (error) {
        res.status(500).send('Error al obtener la tarea');
    }
});

router.post('/task', async (req, res) => {
    console.log('datos: ', req.body);
    const { title, review } = req.body; // Extraer los campos que coinciden con tu modelo

    if (!title || !review) {
        return res.status(400).send('Faltan campos obligatorios');
    }

    try {
        const newTask = await Task.create({ title, review }); // Crear la tarea con los campos correctos
        res.status(201).json(newTask); // Respuesta con el objeto creado
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        res.status(500).send('Error al crear la tarea');
    }
});

router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Task.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.send('Tarea eliminada con éxito');
    } catch (error) {
        res.status(500).send('Error al eliminar la tarea');
    }
});

router.put('/task/:id', async (req, res) => {
    const { id } = req.params;
    const { title, review } = req.body;

    if (!title || !review) {
        return res.status(400).send('Faltan campos obligatorios');
    }

    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).send('Tarea no encontrada');
        }

        // Actualizar los campos
        task.title = title;
        task.review = review;
        await task.save();

        res.json(task); // Devolver la tarea actualizada
    } catch (error) {
        console.error("Error al actualizar la tarea:", error); // Ver error en consola
        res.status(500).send('Error al actualizar la tarea');
    }
});

module.exports = router

