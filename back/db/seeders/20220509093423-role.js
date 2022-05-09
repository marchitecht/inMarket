module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = [
      { type: 'Покупатель', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Продавец', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Курьер', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Администратор', createdAt: new Date(), updatedAt: new Date() },
    ];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Roles', roles);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
