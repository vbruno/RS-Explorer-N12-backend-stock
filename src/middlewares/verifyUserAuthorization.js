const AppError = require('../utils/AppError');

function verifyUserAuthorization(roleToVerify) {
  return (request, response, next) => {
    const { role } = request.user;

    if (role !== roleToVerify) {
      throw new AppError('User is not authorized', 401);
    }

    next();
  };
}

module.exports = verifyUserAuthorization;
