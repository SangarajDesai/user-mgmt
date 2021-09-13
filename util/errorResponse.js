class ErrorResponse extends Error {
  constructor(errors, statusCode, errorType) {
    super();
    this.errors = errors;
    this.statusCode = statusCode;
    this.errorType = errorType;
  }
}

module.exports = ErrorResponse;
