"use strict";
var aurelia_cookie_1 = require("./aurelia-cookie");
exports.AureliaCookie = aurelia_cookie_1.AureliaCookie;
function configure(aurelia) {
    aurelia.container.registerSingleton(aurelia_cookie_1.AureliaCookie, aurelia_cookie_1.AureliaCookie);
}
exports.configure = configure;
