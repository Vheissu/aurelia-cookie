define(["require", "exports", './cookie'], function (require, exports, cookie_1) {
    "use strict";
    exports.Cookie = cookie_1.Cookie;
    function configure(aurelia) {
        aurelia.container.registerSingleton(cookie_1.Cookie, new cookie_1.Cookie());
    }
    exports.configure = configure;
});
//# sourceMappingURL=index.js.map