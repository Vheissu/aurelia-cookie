export interface OptionsInterface {
    expires?: Date;
    expiry?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
}
export declare class AureliaCookie {
    /**
    *
    * Get a cookie by its name
    */
    static get(name: string): any;
    /**
    * Set a cookie
    */
    static set(name: string, value: string, options: OptionsInterface): void;
    /**
    * Deletes a cookie by setting its expiry date in the past
    */
    static delete(name: string, domain?: null): void;
    /**
    * Get all set cookies and return an array
    */
    static all(): any;
    static parse(str: string): any;
    static encode(value: string): string | null;
    static decode(value: string): any;
}
