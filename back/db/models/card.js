const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
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
  Card.init({
    number: DataTypes.TEXT,
    expMonth: DataTypes.STRING,
    expYear: DataTypes.STRING,
    secureCode: DataTypes.STRING,
    isPrimary: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
