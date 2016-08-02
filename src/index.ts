import {Cookie} from './cookie';

export function configure(aurelia) {
    aurelia.container.registerSingleton(Cookie, new Cookie());
}

export {Cookie};
