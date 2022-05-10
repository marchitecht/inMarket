const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { User, Role } = require('../db/models');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

class UserService {
  async refresh(refreshToken) {
    if (!refreshToken) {
      console.log('NO REFRESH TOKEN');
      throw ApiError.unauthorizedError();
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken, userData.id);
    // console.log('userDATA --> ', userData);
    // console.log('TokenFromDB --> ', tokenFromDb);
    if (!tokenFromDb || !userData) {
      console.log('NO NEEDED THINGS');
      throw ApiError.unauthorizedError();
    }
    const user = await User.findByPk(userData.id);
    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async login(email, password) {
    const candidate = await User.findOne({
      where: {
        email,
      },
    });
    if (!candidate) {
      throw ApiError.BadRequest('Юзера с таким e-mail не существует. Проверьте правильность введенных данных.');
    }
    const isPasswordCorrect = await bcrypt.compare(password, candidate.password);
    if (!isPasswordCorrect) {
      throw ApiError.BadRequest('Пароль введен неверно. Проверьте правильность введенных данных.');
    }

    const userDto = new UserDto(candidate);
    const tokens = await tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    await candidate.update({ isOnline: true });
    return { ...tokens, user: userDto };
  }

  async registration(email, password, firstName, lastName, dob, gender, role, avatar) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с таким ${email} уже существует`);
    } else {
      const activationLink = uuid.v4();
      const userRole = await Role.findOne({
        where: {
          type: role,
        },
      });
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        activationLink,
        password: hashPassword,
        firstName,
        lastName,
        dob,
        gender,
        avatar,
        roleId: userRole.id,
      });
      await mailService.sendActivationMail(email, `${process.env.BACK_URL}/auth/activate/${activationLink}`);
      const userDto = new UserDto(newUser);
      const tokens = await tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return { ...tokens, user: userDto };
    }
  }

  async activate(activationLink) {
    const user = await User.findOne({
      where: {
        activationLink,
      },
    });
    if (!user) {
      throw ApiError.BadRequest('Некорректная ссылка активации');
    }
    await user.update({ isActivated: true });
  }

  async getUsers() {
    const users = await User.findAll();
    return users;
  }
}

module.exports = new UserService();
