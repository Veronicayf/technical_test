const { Task } = require('../../../../db');

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Task.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: 'Error deleting task' });
    }
};

module.exports = {
    deleteTask
};