const JWT = require('jsonwebtoken');
const ErrorResponse = require('../util/errorResponse');
const errorMessages = require('../config/errorMessages');
module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if(!authHeader){
      next(new ErrorResponse([{message:errorMessages.PROVIDE_AUTH_HEADER}],400,'vError'));
    }
    const token = authHeader && authHeader.split(' ')[1];
    const isTokenValid = JWT.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    next(new ErrorResponse([{message:errorMessages.INVALID_TOKEN}],401,'aError'));
  }
};
