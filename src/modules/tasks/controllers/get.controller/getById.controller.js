const { Task } = require('../../../../db');


const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error("Error al obtener la tarea:", error);
        res.status(500).json({ message: 'Error al obtener la tarea' });
    }
};

module.exports = {
    getTaskById
};