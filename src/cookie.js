export class Cookie {
    
    /**
     * Get a cookie by its name
     */
    static get(name) {
        let cookies = this.all();

        if (cookies && cookies[name]) {
            return cookies[name];
        }

        return null;
    }
    
    /**
     * Set a cookie
     */
    static set(name, value, options = {}) {
        let str = `${this.encode(name)}=${this.encode(value)}`;

        if (value == null) {
            options.expiry = -1;
        }
        
        /**
         * Expiry date in hours
         */
        if (options.expiry) {
            let today = new Date();
            options.expires = today.setHours(today.getHours() + options.expiry);
        }

        if (options.path) {
            str += `; path=${options.path}`;
        }

        if (options.domain) {
            str += `; domain=${options.domain}`;
        }

        if (options.expires) {
            str += `; expires=${options.expires.toUTCString()}`;
        }

        if (options.secure) {
            str += '; secure';
        }

        document.cookie = str;
    }
    
    /**
     * Deletes a cookie by setting its expiry date in the past
     */
    static delete(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    /**
     * Get all set cookies and return an array
     */
    static all() {
        return this.parse(document.cookie);
    }

    parse(str) {
        var obj = {};
        var pairs = str.split(/ *; */);
        var pair;

        if ('' == pairs[0]) {
            return obj;
        }

        for (let i = 0; i < pairs.length; ++i) {
            pair = pairs[i].split('=');
            obj[decode(pair[0])] = decode(pair[1]);
        }

        return obj;
    }

    encode(value) {
        try {
            return encodeURIComponent(value);
        } catch (e) {
            return null;
        }
    }

    decode(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {
            return null;
        }
    }
}
