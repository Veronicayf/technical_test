const { Task } = require('../../../../db');


const createTask = async (req, res) => {
    const { title, review } = req.body;

    // Validar que los campos obligatorios no estén vacíos
    if (!title || !review) {
        return res.status(400).json({ message: 'Faltan campos obligatorios: title y review' });
    }

    try {
        const newTask = await Task.create({ title, review });
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        res.status(500).json({ message: 'Error al crear la tarea' });
    }
};

module.exports = {
    createTask
};