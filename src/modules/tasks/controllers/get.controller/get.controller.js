const { Task } = require('../../../../db');


const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found.' });
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error getting tasks:", error);
        res.status(500).json({ message: 'Error getting tasks:' });
    }
};

module.exports = {
    getTasks
};


