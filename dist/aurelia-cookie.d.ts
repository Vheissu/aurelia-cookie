export declare class Cookie {
  
  /**
       *
       * Get a cookie by its name
       */
  static get(name?: any): any;
  
  /**
       * Set a cookie
       */
  static set(name?: any, value?: any, options?: any): any;
  
  /**
       * Deletes a cookie by setting its expiry date in the past
       */
  static delete(name?: any, domain?: any): any;
  
  /**
       * Get all set cookies and return an array
       */
  static all(): any;
  static parse(str?: any): any;
  static encode(value?: any): any;
  static decode(value?: any): any;
}
export declare function configure(aurelia?: any): any;
export declare {
  Cookie
};