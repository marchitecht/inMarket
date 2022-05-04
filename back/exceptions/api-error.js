module.exports = class ApiError extends Error {
  status;

  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static unauthorizedError() {
    return new ApiError(401, 'Авторизация не пройдена. Пожалуйста, пройдите авторизацию по ссылке');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
