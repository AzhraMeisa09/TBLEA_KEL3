'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('barang_keluars', {
      id_barangkeluar: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_admin: {
        type: Sequelize.INTEGER,
        references: {
          model: 'admins',
          key: 'id_admin',
        },
      },
      tanggal_keluar: {
        type: Sequelize.DATE
      },
      keterangan: {
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable('barang_keluars');
  }
};