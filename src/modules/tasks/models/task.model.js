const sequelize = require('sequelize')
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING(100)
        },
        review: {
            type: DataTypes.STRING(450),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, { timestamps: false });
}