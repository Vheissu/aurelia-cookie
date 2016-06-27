'use strict';

System.register(['./cookie'], function (_export, _context) {
    "use strict";

    var Cookie;
    return {
        setters: [function (_cookie) {
            Cookie = _cookie.Cookie;
        }],
        execute: function () {
            function configure(aurelia) {
                aurelia.container.registerSingleton(Cookie, new Cookie());
            }

            _export('configure', configure);

            _export('Cookie', Cookie);
        }
    };
});