const { Task } = require('../../../../db');


const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, review } = req.body;

    // Validar que los campos obligatorios no estén vacíos
    if (!title || !review) {
        return res.status(400).json({ message: 'Faltan campos obligatorios: title y review' });
    }

    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        task.title = title;
        task.review = review;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
};

module.exports = {
    updateTask
};