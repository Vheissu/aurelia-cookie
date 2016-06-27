'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cookie = undefined;
exports.configure = configure;

var _cookie = require('./cookie');

function configure(aurelia) {
    aurelia.container.registerSingleton(_cookie.Cookie, new _cookie.Cookie());
}

exports.Cookie = _cookie.Cookie;