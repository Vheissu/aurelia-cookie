declare module 'aurelia-cookie' {
  export class Cookie {
    
    /**
         * Get a cookie by its name
         */
    static get(name: any): any;
    
    /**
         * Set a cookie
         */
    static set(name: any, value: any, options?: any): any;
    
    /**
         * Deletes a cookie by setting its expiry date in the past
         */
    static delete(name: any): any;
    
    /**
         * Get all set cookies and return an array
         */
    static all(): any;
    parse(str: any): any;
    encode(value: any): any;
    decode(value: any): any;
  }
  export function configure(aurelia: any): any;
}