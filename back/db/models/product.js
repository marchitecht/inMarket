const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Subcategory, Cart, Review,
    }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Review, { foreignKey: 'customerId' });
      this.belongsTo(Subcategory, { foreignKey: 'subCategoryId' });
      this.hasMany(Cart, { foreignKey: 'productId' });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
    priceKg: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
