'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaCookie = require('./aurelia-cookie');

Object.keys(_aureliaCookie).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaCookie[key];
    }
  });
});