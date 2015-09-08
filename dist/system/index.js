System.register(['./cookie'], function (_export) {
    'use strict';

    var Cookie;

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.singleton(Cookie, new Cookie());
    }

    return {
        setters: [function (_cookie) {
            Cookie = _cookie.Cookie;
        }],
        execute: function () {
            _export('Cookie', Cookie);
        }
    };
});