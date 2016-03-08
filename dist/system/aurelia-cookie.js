System.register([], function (_export) {
    'use strict';

    var Cookie;

    _export('configure', configure);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function configure(aurelia) {
        aurelia.container.registerSingleton(Cookie, new Cookie());
    }

    return {
        setters: [],
        execute: function () {
            Cookie = (function () {
                function Cookie() {
                    _classCallCheck(this, Cookie);
                }

                Cookie.get = function get(name) {
                    var cookies = this.all();

                    if (cookies && cookies[name]) {
                        return cookies[name];
                    }

                    return null;
                };

                Cookie.set = function set(name, value) {
                    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                    var str = this.encode(name) + '=' + this.encode(value);

                    if (value == null) {
                        options.expiry = -1;
                    }

                    if (options.expiry) {
                        var today = new Date();
                        options.expires = today.setHours(today.getHours() + options.expiry);
                    }

                    if (options.path) {
                        str += '; path=' + options.path;
                    }

                    if (options.domain) {
                        str += '; domain=' + options.domain;
                    }

                    if (options.expires) {
                        str += '; expires=' + options.expires.toUTCString();
                    }

                    if (options.secure) {
                        str += '; secure';
                    }

                    document.cookie = str;
                };

                Cookie['delete'] = function _delete(name) {
                    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                };

                Cookie.all = function all() {
                    return this.parse(document.cookie);
                };

                Cookie.parse = function parse(str) {
                    var obj = {};
                    var pairs = str.split(/ *; */);
                    var pair;

                    if ('' == pairs[0]) {
                        return obj;
                    }

                    for (var i = 0; i < pairs.length; ++i) {
                        pair = pairs[i].split('=');
                        obj[decode(pair[0])] = decode(pair[1]);
                    }

                    return obj;
                };

                Cookie.encode = function encode(value) {
                    try {
                        return encodeURIComponent(value);
                    } catch (e) {
                        return null;
                    }
                };

                Cookie.decode = function decode(value) {
                    try {
                        return decodeURIComponent(value);
                    } catch (e) {
                        return null;
                    }
                };

                return Cookie;
            })();

            _export('Cookie', Cookie);

            _export('Cookie', Cookie);
        }
    };
});