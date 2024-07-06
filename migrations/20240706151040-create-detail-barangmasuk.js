'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_barangmasuks', {
      id_detail: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_barang: {
        type: Sequelize.INTEGER,
        references: {
          model: 'barangs',
          key: 'id_barang',
        },
      },
      id_barangmasuk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'barang_masuk',
          key: 'id_barangmasuk',
        },
      },
      namaBarang: {
        type: Sequelize.STRING
      },
      jumlah: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('detail_barangmasuks');
  }
};