const { Task } = require('../../db');

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Task.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada con éxito' });
    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        res.status(500).json({ message: 'Error al eliminar la tarea' });
    }
};

module.exports = {
    deleteTask
};