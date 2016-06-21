define(['exports', './aurelia-cookie'], function (exports, _aureliaCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaCookie).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaCookie[key];
      }
    });
  });
});