const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')

const kategori = sequelize.define('kategori', {
    id_kategori:{
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
    },
    nama_kategori: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    manfaat: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    kandungan: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

module.exports = kategori