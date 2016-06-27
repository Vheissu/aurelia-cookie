'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var Cookie;

    

    return {
        setters: [],
        execute: function () {
            _export('Cookie', Cookie = function () {
                function Cookie() {
                    
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

                    if (value === null) {
                        options.expiry = -1;
                    }

                    if (options.expiry >= 0 && !options.expires) {
                        var expires = new Date();

                        expires.setHours(expires.getHours() + options.expiry);
                        options.expires = expires;
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

                Cookie.delete = function _delete(name) {
                    var domain = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                    var cookieString = name + ' =;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

                    if (domain) {
                        cookieString += '; domain=' + domain;
                    }

                    document.cookie = cookieString;
                };

                Cookie.all = function all() {
                    return this.parse(document.cookie);
                };

                Cookie.parse = function parse(str) {
                    var obj = {};
                    var pairs = str.split(/ *; */);
                    var pair = void 0;

                    if (pairs[0] === '') {
                        return obj;
                    }

                    for (var i = 0; i < pairs.length; ++i) {
                        pair = pairs[i].split('=');
                        obj[this.decode(pair[0])] = this.decode(pair[1]);
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
            }());

            _export('Cookie', Cookie);
        }
    };
});