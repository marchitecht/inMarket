const jwt = require('jsonwebtoken');
const { Token } = require('../db/models');

class TokenService {
  async generateTokens(payload) {
    const accessToken = await jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = await jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
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
      // eslint-disable-next-line no-return-await
      return await isTokenInDb.update({ refreshToken });
    }
    const token = await Token.create({ userId, refreshToken });
    return token;
  }

  async validateAccessToken(token) {
    try {
      const userData = await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async validateRefreshToken(token) {
    try {
      const userData = await jwt.verify(token, process.env.JWT_REFRESH_SECRET);
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
