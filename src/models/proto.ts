import Environment from './environment.js';

import includes from '../utils/includes';
import defaults from '../utils/defaults';

export class Proto {

    constructor() { }

    start(env: Environment) {

        includes();

        for (let attr of Object.keys(defaults)) {
            Storage.prototype[attr] = defaults[attr];
        }

    }

}

export default Proto