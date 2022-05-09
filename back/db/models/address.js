const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, OrderDetails }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(OrderDetails, { foreignKey: 'id' });
    }
  }
  Address.init({
    address: DataTypes.TEXT,
    isPrimary: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
