const { Task } = require('../../../../db');

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body

    try {
        const task = await Task.findOne({ where: { id } });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.update({ status })
        res.status(200).json(task);

    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: 'Error updating task' });
    }
};

module.exports = {
    updateTask
};