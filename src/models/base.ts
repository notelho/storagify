import { Encoder } from '../models/encoder.js'
import { Development } from '../models/development.js'
import { Production } from '../models/production.js'


import Environment from './environment.js'

import config from '../utils/config'

export class Base {

    start(env: Environment) {

        Storage.prototype[`__encoder`] = new Encoder(env.key);
        Storage.prototype[`__development`] = new Development();
        Storage.prototype[`__production`] = new Production();
        Storage.prototype[`__environment`] = env;
        Storage.prototype[`__base`] = {};

        for (let def of config.defaults) {
            Storage.prototype[`__base`][`_${def}`] = Storage.prototype[def];
        }

        Storage.prototype['env'] = function () {
            if (this[`__environment`].development) {
                return this[`__development`];
            } else {
                return this[`__production`];
            }
        }

    }

}

export default Base