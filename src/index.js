import {Cookie} from './cookie';

export function configure(aurelia) {
    aurelia.singleton(Cookie, new Cookie());
}

export {Cookie};
