'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang_masuk extends Model {
    static associate(models) {
      this.belongsTo(models.admin, { foreignKey: 'id_admin', as: 'admin' });
    }
  }
  barang_masuk.init({
    id_barangmasuk: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_masuk: {
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
    modelName: 'barang_masuk',
    tableName: 'barang_masuks',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return barang_masuk;
};