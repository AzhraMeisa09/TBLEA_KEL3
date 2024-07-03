const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')

const admin = sequelize.define('admin', {
    id_admin:{
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
    },
    nama_admin: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    noHP: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = admin