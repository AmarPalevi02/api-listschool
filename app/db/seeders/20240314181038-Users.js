'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'ian',
        lastName: 'firdaus',
        email: 'ian@example.com',
        otp: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Adit',
        lastName: 'Mahendra',
        email: 'adit@example.com',
        otp: null, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
