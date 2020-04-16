import StorageEnvironment from './storage-environment.js';
import EncoderEncryptor from './encoder-encryptor';
import EncoderParser from './encoder-parser';
import WorkerDevelopment from './worker-development.js';
import WorkerProduction from './worker-production.js';
import Prototype from './prototype';
import includes from '../utils/includes';

export class PrototypeInstance implements Prototype {

    start(env: StorageEnvironment) {

        includes();

        Storage.prototype[`[[environment]]`] = env;

        Storage.prototype[`[[parser]]`] = new EncoderParser(env);
        Storage.prototype[`[[encryptor]]`] = new EncoderEncryptor(env);
        Storage.prototype[`[[development]]`] = new WorkerDevelopment();
        Storage.prototype[`[[production]]`] = new WorkerProduction();

        Storage.prototype[`[[native]]`] = {};
        Storage.prototype[`[[native]]`]['setItem'] = Storage.prototype['setItem'];
        Storage.prototype[`[[native]]`]['getItem'] = Storage.prototype['getItem'];
        Storage.prototype[`[[native]]`]['removeItem'] = Storage.prototype['removeItem'];
        Storage.prototype[`[[native]]`]['clear'] = Storage.prototype['clear'];
        Storage.prototype[`[[native]]`]['key'] = Storage.prototype['key'];

    }

}

export default PrototypeInstance;