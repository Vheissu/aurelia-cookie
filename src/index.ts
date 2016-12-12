import {AureliaCookie} from './aurelia-cookie';

export function configure(aurelia: any) {
    aurelia.container.registerSingleton(AureliaCookie, AureliaCookie);
}

export {AureliaCookie};
