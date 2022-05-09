const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Role, Email, Phone, Product, Token, Card, Address, OrderDetails, Review, Favourite,
    }) {
      this.hasMany(OrderDetails, { foreignKey: 'customerId' });
      this.hasOne(Role, { foreignKey: 'id' });
      this.hasOne(Token, { foreignKey: 'userId' });
      this.hasMany(Review, { foreignKey: 'customerId' });
      this.hasMany(Phone, { foreignKey: 'userId' });
      this.hasMany(Email, { foreignKey: 'userId' });
      this.hasMany(Card, { foreignKey: 'userId' });
      this.hasMany(Address, { foreignKey: 'userId' });
      this.hasMany(Product, { foreignKey: 'userId' });
      this.belongsToMany(Product, { through: Favourite, foreignKey: 'id' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isOnline: DataTypes.BOOLEAN,
    isActivated: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER,
    activationLink: DataTypes.STRING,
    googleId: DataTypes.STRING,
    vkId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
