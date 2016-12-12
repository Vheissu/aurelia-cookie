define(["require", "exports", "./aurelia-cookie"], function (require, exports, aurelia_cookie_1) {
    "use strict";
    exports.AureliaCookie = aurelia_cookie_1.AureliaCookie;
    function configure(aurelia) {
        aurelia.container.registerSingleton(aurelia_cookie_1.AureliaCookie, aurelia_cookie_1.AureliaCookie);
    }
    exports.configure = configure;
});
