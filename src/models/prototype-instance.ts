import StorageEnvironment from './storage-environment';
import WorkerDevelopment from './worker-development';
import WorkerProduction from './worker-production';
import Convertor from './convertor';
import Prototype from './prototype';
import Encoder from './encoder';
import Parser from './parser';
import ConfiguratorDevelopment from './configurator-development';
import ConfiguratorProduction from './configurator-production';

import includes from '../utils/includes';

export class PrototypeInstance implements Prototype {

    start(env: StorageEnvironment): void {

        includes();

        const key = env.key;
        const stringfy = env.stringify;

        Storage.prototype[`[[environment]]`] = env;

        Storage.prototype[`[[convertor]]`] = new Convertor();
        Storage.prototype[`[[encoder]]`] = new Encoder(key);
        Storage.prototype[`[[parser]]`] = new Parser(stringfy);

        const devWorker = new WorkerDevelopment();
        const devConfig = new ConfiguratorDevelopment();

        const prodWorker = new WorkerProduction();
        const prodConfig = new ConfiguratorProduction();

        Storage.prototype[`[[development]]`] = { worker: devWorker, config: devConfig };
        Storage.prototype[`[[production]]`] = { worker: prodWorker, config: prodConfig };

        Storage.prototype[`[[native]]`] = {};
        Storage.prototype[`[[native]]`]['setItem'] = Storage.prototype['setItem'];
        Storage.prototype[`[[native]]`]['getItem'] = Storage.prototype['getItem'];
        Storage.prototype[`[[native]]`]['removeItem'] = Storage.prototype['removeItem'];
        Storage.prototype[`[[native]]`]['clear'] = Storage.prototype['clear'];
        Storage.prototype[`[[native]]`]['key'] = Storage.prototype['key'];

    }

}

export default PrototypeInstance;
