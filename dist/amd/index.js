define(['exports', './cookie'], function (exports, _cookie) {
    'use strict';

    exports.__esModule = true;
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.singleton(_cookie.Cookie, new _cookie.Cookie());
    }

    exports.Cookie = _cookie.Cookie;
});