System.register(['./cookie'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var cookie_1;
    function configure(aurelia) {
        aurelia.container.registerSingleton(cookie_1.Cookie, new cookie_1.Cookie());
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (cookie_1_1) {
                cookie_1 = cookie_1_1;
            }],
        execute: function() {
            exports_1("Cookie", cookie_1.Cookie);
        }
    }
});
//# sourceMappingURL=index.js.map