const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        temperature: { type: DataTypes.STRING, allowNull: false },
        humidity: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('Event', attributes);
}