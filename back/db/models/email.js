const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Email.init({
    email: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isPrimary: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Email',
  });
  return Email;
};
