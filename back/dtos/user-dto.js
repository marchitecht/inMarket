module.exports = class UserDto {
  constructor(model) {
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated || false;
  }
};
