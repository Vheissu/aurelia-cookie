System.register(["./aurelia-cookie"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.container.registerSingleton(aurelia_cookie_1.AureliaCookie, aurelia_cookie_1.AureliaCookie);
    }
    exports_1("configure", configure);
    var aurelia_cookie_1;
    return {
        setters: [
            function (aurelia_cookie_1_1) {
                aurelia_cookie_1 = aurelia_cookie_1_1;
            }
        ],
        execute: function () {
            exports_1("AureliaCookie", aurelia_cookie_1.AureliaCookie);
        }
    };
});
