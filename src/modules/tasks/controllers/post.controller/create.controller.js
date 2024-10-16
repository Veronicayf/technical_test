const { Task } = require('../../../../db');


const createTask = async (req, res) => {
    const { title, review, status } = req.body;

    // Validar que los campos obligatorios no estén vacíos
    if (!title || !review) {
        return res.status(400).json({ message: 'Missing required fields: title and review' });
    }

    try {
        const newTask = await Task.create({ title, review, status }); //
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: 'Error creating task' });
    }
};

module.exports = {
    createTask
};