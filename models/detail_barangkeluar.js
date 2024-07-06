'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_barangkeluar extends Model {
    static associate(models) {
      this.belongsTo(models.barang, { foreignKey: 'id_barang', as: 'barang' });
      this.belongsTo(models.barang_keluar, { foreignKey: 'id_barangkeluar', as: 'barang_keluar' });
    }
  }
  detail_barangkeluar.init({
    id_detail: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaBarang: {
      type: DataTypes.STRING,
    },
    jumlah: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'detail_barangkeluar',
    tableName: 'detail_barangkeluars',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return detail_barangkeluar;
};