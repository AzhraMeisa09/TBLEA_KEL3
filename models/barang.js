const {DataTypes} = require('sequelize')
const sequelize = require('../config/dbConfig')

const barang = sequelize.define('barang', {
    id_barang:{
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
    },
    nama_barang: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    stok_barang: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    harga_barang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_supplier: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    id_kategori: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
})

module.exports = barang