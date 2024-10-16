
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('UserTask', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        taskId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tasks',
                key: 'id'
            }
        }
    }, { timestamps: false });
};