'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang_keluar extends Model {
    static associate(models) {
      this.belongsTo(models.admin, { foreignKey: 'id_admin', as: 'admin' });
    }
  }
  barang_keluar.init({
    id_barangkeluar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_keluar: {
      type: DataTypes.DATE,
    },
    keterangan: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
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
    modelName: 'barang_keluar',
    tableName: 'barang_keluars',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return barang_keluar;
};