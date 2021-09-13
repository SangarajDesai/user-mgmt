const errorMessages = require('../config/errorMessages');
const errorHandler = (err, req, res, next) => {
  var msg = err.errors;
  var statusCode = err.statusCode;
  const errorType = err.errorType;
  if (err.code === 11000) {
    statusCode = 400;
    msg = errorMessages.EMAIL_EXISTS;
  }
  if(err.kind == "ObjectId"){
    statusCode =400;
    msg = errorMessages.INVALID_USER_ID
  }
  if (errorType === 'vError') {
    let errors = err.errors.map((error) => error.message);
    msg = errors.join(',');
  }
  if (errorType === 'dError') {
    let errors = err.errors.map((error) => error.message);
    msg = errors.join(',');
  }

  if (errorType === 'aError') {
    let errors = err.errors.map((error) => error.message);
    msg = errors.join(',');
  }
  res.status(statusCode || 500).json({
    status: false,
    msg: msg || 'Something went wrong...',
  });
};

module.exports = errorHandler;
