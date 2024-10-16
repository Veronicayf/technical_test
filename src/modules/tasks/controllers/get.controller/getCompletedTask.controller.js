const { Task } = require('../../../../db');

const getCompletedTask = async (req, res) => {
    try {
        const completedTask = await Task.findAll({ where: { status: true } })
        res.status(200).json(completedTask)
    } catch (error) {
        console.error('error getting completed tasks', error);
        res.status(500).json({ message: 'error getting completed tasks' })
    }
};

module.exports = {
    getCompletedTask
}