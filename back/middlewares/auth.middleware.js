const ApiError = require('../exceptions/api-error');
const tokenService = require('../services/token-service');

// eslint-disable-next-line func-names
// eslint-disable-next-line consistent-return
module.exports = async function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.unauthorizedError());
    }
    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(ApiError.unauthorizedError());
    }
    const userData = await tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.unauthorizedError());
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.unauthorizedError());
  }
};
