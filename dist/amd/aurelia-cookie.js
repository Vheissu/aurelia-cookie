define(["require", "exports"], function (require, exports) {
    "use strict";
    var AureliaCookie = (function () {
        function AureliaCookie() {
        }
        /**
        *
        * Get a cookie by its name
        */
        AureliaCookie.get = function (name) {
            var cookies = this.all();
            if (cookies && cookies[name]) {
                return cookies[name];
            }
            return null;
        };
        /**
        * Set a cookie
        */
        AureliaCookie.set = function (name, value, options) {
            var str = this.encode(name) + "=" + this.encode(value);
            if (value === null) {
                options.expiry = -1;
            }
            /**
            * Expiry date in hours
            */
            if (options.expiry >= 0 && !options.expires) {
                var expires = new Date();
                expires.setHours(expires.getHours() + options.expiry);
                options.expires = expires;
            }
            if (options.path) {
                str += "; path=" + options.path;
            }
            if (options.domain) {
                str += "; domain=" + options.domain;
            }
            if (options.expires) {
                str += "; expires=" + options.expires.toUTCString();
            }
            if (options.secure) {
                str += '; secure';
            }
            document.cookie = str;
        };
        /**
        * Deletes a cookie by setting its expiry date in the past
        */
        AureliaCookie.delete = function (name, domain) {
            if (domain === void 0) { domain = null; }
            var cookieString = name + " =;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            if (domain) {
                cookieString += "; domain=" + domain;
            }
            document.cookie = cookieString;
        };
        /**
        * Get all set cookies and return an array
        */
        AureliaCookie.all = function () {
            return this.parse(document.cookie);
        };
        AureliaCookie.parse = function (str) {
            var obj = {};
            var pairs = str.split(/ *; */);
            var pair;
            if (pairs[0] === '') {
                return obj;
            }
            for (var i = 0; i < pairs.length; ++i) {
                pair = pairs[i].split('=');
                obj[this.decode(pair[0])] = this.decode(pair[1]);
            }
            return obj;
        };
        AureliaCookie.encode = function (value) {
            try {
                return encodeURIComponent(value);
            }
            catch (e) {
                return null;
            }
        };
        AureliaCookie.decode = function (value) {
            try {
                return decodeURIComponent(value);
            }
            catch (e) {
                return null;
            }
        };
        return AureliaCookie;
    }());
    exports.AureliaCookie = AureliaCookie;
});
