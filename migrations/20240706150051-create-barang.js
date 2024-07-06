'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barangs', {
      id_barang: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kategoribarangs',
          key: 'id_kategori',
        },
      },
      id_supplier: {
        type: Sequelize.INTEGER,
        references: {
          model: 'suppliers',
          key: 'id_supplier',
      },
    },
      namaBarang: {
        type: Sequelize.STRING
      },
      stokBarang: {
        type: Sequelize.STRING
      },
      hargaBarang: {
        type: Sequelize.STRING
      },
      ukuranBarang: {
        type: Sequelize.STRING
      },
      gambar: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('barangs');
  }
};