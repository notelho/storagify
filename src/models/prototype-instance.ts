import Environment from './environment.js';
import Development from './development.js';
import Production from './production.js';
import Encoder from './encoder.js';

import config from '../utils/config';

export class Native {

    start(env: Environment) {

        Storage.prototype[`__encoder`] = new Encoder(env.key);
        Storage.prototype[`__development`] = new Development();
        Storage.prototype[`__production`] = new Production();
        Storage.prototype[`__environment`] = env;
        Storage.prototype[`__native`] = {};

        for (let def of config.defaults) {
            Storage.prototype[`__native`][def] = Storage.prototype[def];
        }

        Storage.prototype['env'] = function () {
            return this[`__environment`];
        }

        Storage.prototype['type'] = function (instance: Storage): string {

            const local = 'local storage';
            const session = 'session storage';

            if (instance === localStorage) {
                return local;
            } else if (instance === sessionStorage) {
                return session;
            }

            return '';

        }

        Storage.prototype['worker'] = function () {
            if (this.env().development) {
                return this[`__development`];
            } else {
                return this[`__production`];
            }
        }

    }

}

export default Native