'use strict';

exports.__esModule = true;
exports.configure = configure;

var _cookie = require('./cookie');

function configure(aurelia) {
    aurelia.singleton(_cookie.Cookie, new _cookie.Cookie());
}

exports.Cookie = _cookie.Cookie;