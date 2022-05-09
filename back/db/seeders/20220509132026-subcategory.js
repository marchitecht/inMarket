module.exports = {
  async up(queryInterface, Sequelize) {
    const subcategories = [
      {
        subCategoryName: 'Кабачки', subCategoryImg: '/img/subCategories/vegetables/cabach.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Капуста', subCategoryImg: '/img/subCategories/vegetables/capusta.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Морковь', subCategoryImg: '/img/subCategories/vegetables/morc.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Огурцы', subCategoryImg: '/img/subCategories/vegetables/ogur.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Перец', subCategoryImg: '/img/subCategories/vegetables/perec.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Помидоры', subCategoryImg: '/img/subCategories/vegetables/pom.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Картофель', subCategoryImg: '/img/subCategories/vegetables/pot.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Свекла', subCategoryImg: '/img/subCategories/vegetables/svekla.jpg', categoryId: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Ананасы', subCategoryImg: '/img/subCategories/fruits/an.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Яблоки', subCategoryImg: '/img/subCategories/fruits/apple.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Бананы', subCategoryImg: '/img/subCategories/fruits/bananas.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Киви', subCategoryImg: '/img/subCategories/fruits/kiwi.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Манго', subCategoryImg: '/img/subCategories/fruits/mango.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Апельсины', subCategoryImg: '/img/subCategories/fruits/oranges.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Груши', subCategoryImg: '/img/subCategories/fruits/pear.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Персики', subCategoryImg: '/img/subCategories/fruits/pers.jpg', categoryId: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('subcategories', subcategories);
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
