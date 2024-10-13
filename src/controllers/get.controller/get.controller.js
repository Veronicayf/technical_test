const { Task } = require('../../db');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No se encontraron tareas.' });
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error al obtener tareas:", error);
        res.status(500).json({ message: 'Error al obtener tareas' });
    }
};

module.exports = {
    getTasks
};


