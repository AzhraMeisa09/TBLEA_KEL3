'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategoriBarang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kategoriBarang.init({
    id_kategori: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_kategori: {
      type: DataTypes.STRING
    },
    manfaat: {
      type: DataTypes.STRING
    },
    kandungan: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'kategoriBarang',
    tableName: 'kategoriBarangs',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return kategoriBarang;
};