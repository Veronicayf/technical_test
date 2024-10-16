const { Task } = require('../../../../db');

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body

    try {
        const task = await Task.findOne({ where: { id } });
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        await task.update({ status })
        res.status(200).json(task);

    } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};

module.exports = {
    updateTask
};