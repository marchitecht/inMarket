module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        categoryName: 'Овощи', categoryImg: '/img/categories/tomato.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Фрукты', categoryImg: '/img/categories/pear.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Ягоды', categoryImg: '/img/categories/berries.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Хлеб', categoryImg: '/img/categories/bread.png', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Categories', categories);
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
