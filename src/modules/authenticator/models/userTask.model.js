
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('UserTask', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users', // Nombre de la tabla User
                key: 'id'
            }
        },
        taskId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tasks', // Nombre de la tabla Task
                key: 'id'
            }
        }
    }, { timestamps: false });
};