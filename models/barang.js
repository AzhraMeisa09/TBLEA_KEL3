'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class barang extends Model {
    static associate(models) {
      this.belongsTo(models.kategoribarang, { foreignKey: 'id_kategori', as: 'kategoribarang' });
      this.belongsTo(models.supplier, { foreignKey: 'id_supplier', as: 'supplier' });
    }
  }
  barang.init({
    id_barang: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namaBarang: {
      type: DataTypes.STRING,
    },
    stokBarang: {
      type: DataTypes.STRING,
    },
    hargaBarang: {
      type: DataTypes.STRING,
    },
    ukuranBarang: {
      type: DataTypes.STRING,
    },
    gambar: {
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
    modelName: 'barang',
    tableName: 'barangs',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return barang;
};