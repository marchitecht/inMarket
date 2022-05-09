const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, OrderDetails }) {
      // define association here
      this.belongsTo(OrderDetails, { foreignKey: 'orderId' });
      this.hasOne(Product, { foreignKey: 'id' });
    }
  }
  Cart.init({
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
