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
      {
        subCategoryName: 'Вишня', subCategoryImg: '/img/subCategories/berry/cherry.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Ежевика', subCategoryImg: '/img/subCategories/berry/ez.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Голубика', subCategoryImg: '/img/subCategories/berry/gol.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Крыжовник', subCategoryImg: '/img/subCategories/berry/kryzhovnik.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Малина', subCategoryImg: '/img/subCategories/berry/mal.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Смородина', subCategoryImg: '/img/subCategories/berry/smor.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Клубника', subCategoryImg: '/img/subCategories/berry/str.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Земляника', subCategoryImg: '/img/subCategories/berry/zemlyanika.jpg', categoryId: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Бородинский', subCategoryImg: '/img/subCategories/bread/borodino.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Чиабатта', subCategoryImg: '/img/subCategories/bread/chiabatta.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Цельнозерновой хлеб', subCategoryImg: '/img/subCategories/bread/czelnozernovoj.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Круассаны', subCategoryImg: '/img/subCategories/bread/kruas.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Кукурузный хлеб', subCategoryImg: '/img/subCategories/bread/kukur.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Пита', subCategoryImg: '/img/subCategories/bread/pita.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Пшеничный', subCategoryImg: '/img/subCategories/bread/pshenichniy.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        subCategoryName: 'Ржаной', subCategoryImg: '/img/subCategories/bread/rjanoy.jpg', categoryId: 4, createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Subcategories', subcategories);
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
