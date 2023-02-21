"use strict";

var globalAny = global;
function stackTrace() {
  var err = new Error();
  return err.stack;
}
function RuntimeError(message) {
  this.message = message;
  if ("captureStackTrace" in Error) Error.captureStackTrace(this, RuntimeError);else this.stack = stackTrace();
}
RuntimeError.prototype = Object.create(Error.prototype);
RuntimeError.prototype.name = "RuntimeException";
RuntimeError.prototype.message = globalAny.message;
RuntimeError.prototype.stack = globalAny.stack;
module.exports = {
  RuntimeException: RuntimeError
};