const jwt = require('jsonwebtoken');
const { Token } = require('../db/models');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d',
    });
    return {
      accessToken, refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const isTokenInDb = await Token.findOne({
      where: {
        userId,
      },
    });
    if (isTokenInDb) {
      return isTokenInDb.update({ refreshToken });
    }
    const token = Token.create({ userId, refreshToken });
    return token;
  }

  async validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async removeToken(refreshToken) {
    const token = await Token.destroy({
      where: {
        refreshToken,
      },
    });
    return token;
  }

  async findToken(refreshToken) {
    console.log('refreshTokeninFIND ==>', refreshToken);
    const token = await Token.findOne({
      where: {
        refreshToken,
      },
    });
    return token;
  }
}

module.exports = new TokenService();
