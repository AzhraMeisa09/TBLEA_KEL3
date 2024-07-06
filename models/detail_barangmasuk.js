'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_barangmasuk extends Model {
    static associate(models) {
      this.belongsTo(models.barang, { foreignKey: 'id_barang', as: 'barang' });
      this.belongsTo(models.barang_masuk, { foreignKey: 'id_barangmasuk', as: 'barang_masuk' });
    }
  }
  detail_barangmasuk.init({
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
    modelName: 'detail_barangmasuk',
    tableName: 'detail_barangmasuks',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return detail_barangmasuk;
};