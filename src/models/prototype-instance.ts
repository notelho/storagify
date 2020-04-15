import Environment from './environment.js';
import Development from './development.js';
import Production from './production.js';

import Encoder from './encoder.js';

import includes from '../utils/includes';


export class PrototypeInstance {

    start(env: Environment) {

        includes();

        Storage.prototype[`__environment`] = env;

        Storage.prototype[`__encoder`] = new Encoder(env.key);
        Storage.prototype[`__encoder`] = new Encoder(env.key);

        Storage.prototype[`__development`] = new Development();
        Storage.prototype[`__production`] = new Production();

        Storage.prototype[`__native`] = {};

    }

}

export default PrototypeInstance;