const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Product }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasMany(Product, { foreignKey: 'id' });
    }
  }
  Subcategory.init({
    subCategoryName: DataTypes.STRING,
    subCategoryImg: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};
