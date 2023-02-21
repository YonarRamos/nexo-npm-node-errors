"use strict";

var err = require("../index.js");
err.refreshTime(2000);
err.interceptor(function (error) {
  console.log("Code: ".concat(error.code, ", Description ").concat(error.message));
});
err.initialize(function () {
  return {
    "200": {
      code: "200",
      message: "Álvaro Casado"
    },
    "201": {
      code: "201",
      message: "Pablo Andrés"
    }
  };
});
console.log(err.fetch());
try {
  err.except("201");
} catch (error) {
  console.log(error.code, error.message);
}
err.except("200");
console.log("Aqui no llega");