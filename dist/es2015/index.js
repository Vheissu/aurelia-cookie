import { AureliaCookie } from './aurelia-cookie';
export function configure(aurelia) {
    aurelia.container.registerSingleton(AureliaCookie, AureliaCookie);
}
export { AureliaCookie };
