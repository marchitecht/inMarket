module.exports = {
  async up(queryInterface, Sequelize) {
    const statuses = [
      { status: 'Принят', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Собирается', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Доставляется', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Выполнен', createdAt: new Date(), updatedAt: new Date() },
      { status: 'Отменен', createdAt: new Date(), updatedAt: new Date() },
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
    await queryInterface.bulkInsert('OrderStatuses', statuses);
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
