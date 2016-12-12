export interface OptionsInterface {
    expires?: Date;
    expiry?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
}

export class AureliaCookie {
    /**
    *
    * Get a cookie by its name
    */
    public static get(name: string) {
        let cookies: any = this.all();

        if (cookies && cookies[name]) {
            return cookies[name];
        }

        return null;
    }
    
    /**
    * Set a cookie
    */
    static set(name: string, value: string, options: OptionsInterface) {
        let str = `${this.encode(name)}=${this.encode(value)}`;

        if (value === null) {
            options.expiry = -1;
        }
        
        /**
        * Expiry date in hours
        */
        if (options.expiry >= 0 && !options.expires) {
            let expires = new Date();

            expires.setHours(expires.getHours() + options.expiry);
            options.expires = expires;
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
    static delete(name: string, domain = null) {
        let cookieString = `${name} =;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

        if (domain) {
            cookieString += `; domain=${domain}`;
        }

        document.cookie = cookieString;
    }
    
    /**
    * Get all set cookies and return an array
    */
    static all() {
        return this.parse(document.cookie);
    }

    static parse(str: string) {
        let obj: any = {};
        let pairs: any = str.split(/ *; */);
        let pair: any;

        if (pairs[0] === '') {
            return obj;
        }

        for (let i = 0; i < pairs.length; ++i) {
            pair = pairs[i].split('=');
            obj[this.decode(pair[0])] = this.decode(pair[1]);
        }

        return obj;
    }

    static encode(value: string) {
        try {
            return encodeURIComponent(value);
        } catch (e) {
            return null;
        }
    }

    static decode(value: string): any {
        try {
            return decodeURIComponent(value);
        } catch (e) {
            return null;
        }
    }
}
