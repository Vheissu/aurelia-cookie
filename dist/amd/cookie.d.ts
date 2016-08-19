export interface OptionsInterface {
    expires?: Date;
    expiry?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
}
export declare class Cookie {
    static get(name: any): any;
    static set(name: any, value: any, options: OptionsInterface): void;
    static delete(name: any, domain?: any): void;
    static all(): {};
    static parse(str: any): {};
    static encode(value: any): string;
    static decode(value: any): string;
}
