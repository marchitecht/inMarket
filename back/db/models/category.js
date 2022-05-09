const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Subcategory }) {
      this.hasMany(Subcategory, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    categoryName: DataTypes.STRING,
    categoryImg: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
