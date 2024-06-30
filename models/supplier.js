const {DataTypes, ForeignKeyConstraintError} = require('sequelize')
const sequelize = require('../config/dbConfig')

const supplier = sequelize.define('supplier', {
    id_supplier:{
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
    },
    nama_supplier: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    kontak: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

module.exports = supplier