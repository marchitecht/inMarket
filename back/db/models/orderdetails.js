const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, Card, Address, OrderStatus, Cart,
    }) {
      this.belongsTo(User, { foreignKey: 'customerId' });
      this.hasOne(Card, { foreignKey: 'id' });
      this.hasOne(Address, { foreignKey: 'id' });
      this.hasOne(OrderStatus, { foreignKey: 'id' });
      this.hasMany(Cart, { foreignKey: 'orderId' });
    }
  }
  OrderDetails.init({
    customerId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
    addressToId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};
