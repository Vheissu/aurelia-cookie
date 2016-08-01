'use strict';

System.register(['./cookie'], function (_export, _context) {
    "use strict";

    var Cookie;
    function configure(aurelia) {
        aurelia.container.registerSingleton(Cookie, new Cookie());
    }

    _export('configure', configure);

    return {
        setters: [function (_cookie) {
            Cookie = _cookie.Cookie;
        }],
        execute: function () {
            _export('Cookie', Cookie);
        }
    };
});