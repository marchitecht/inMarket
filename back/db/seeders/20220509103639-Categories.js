module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        categoryName: 'Овощи', categoryImg: 'img/Categories/tomato.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Фрукты', categoryImg: 'img/Categories/pear.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Ягоды', categoryImg: 'img/Categories/berries.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        categoryName: 'Хлеб', categoryImg: 'img/Categories/bread.png', createdAt: new Date(), updatedAt: new Date(),
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
