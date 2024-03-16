'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matkuls', [
      { nameMatkul: 'Matematika Dasar', deskripsi: 'Mata kuliah tentang konsep dasar matematika.' },
      { nameMatkul: 'Bahasa Inggris', deskripsi: 'Mata kuliah untuk meningkatkan kemampuan berbahasa Inggris.' },
      { nameMatkul: 'Pemrograman Web', deskripsi: 'Mata kuliah tentang pengembangan aplikasi web.' },
    ], {});
  },
  
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Matkuls', null, {});
  }
};
