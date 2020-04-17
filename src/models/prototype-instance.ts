import StorageEnvironment from './storage-environment.js';
import WorkerDevelopment from './worker-development.js';
import WorkerProduction from './worker-production.js';
import Configurator from './configurator.js';
import Prototype from './prototype';
import Encoder from './encoder.js';
import Parser from './parser.js';
import includes from '../utils/includes';

export class PrototypeInstance implements Prototype {

    start(env: StorageEnvironment): void {

        includes();

        Storage.prototype[`[[environment]]`] = env;

        Storage.prototype[`[[parser]]`] = new Parser(env);
        Storage.prototype[`[[encoder]]`] = new Encoder(env);

        Storage.prototype[`[[development]]`] = new WorkerDevelopment();
        Storage.prototype[`[[production]]`] = new WorkerProduction();

        Storage.prototype[`[[native]]`] = {};
        Storage.prototype[`[[native]]`]['setItem'] = Storage.prototype['setItem'];
        Storage.prototype[`[[native]]`]['getItem'] = Storage.prototype['getItem'];
        Storage.prototype[`[[native]]`]['removeItem'] = Storage.prototype['removeItem'];
        Storage.prototype[`[[native]]`]['clear'] = Storage.prototype['clear'];
        Storage.prototype[`[[native]]`]['key'] = Storage.prototype['key'];

        Storage.prototype[`[[configurator]]`] = new Configurator();

    }

}

export default PrototypeInstance;