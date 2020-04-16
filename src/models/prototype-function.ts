import nativeDefaults from '../utils/native-defaults';
import StorageEnvironment from './storage-environment.js';
import Prototype from './prototype';

export class PrototypeFunction implements Prototype {

    constructor() { }

    start(env: StorageEnvironment) {

        for (let functionName of Object.keys(nativeDefaults)) {
            Storage.prototype[functionName] = nativeDefaults[functionName];
        }

        Storage.prototype['env'] = function () {
            return this[`[[environment]]`];
        }

        Storage.prototype['type'] = function (instance: Storage) {
            if (instance === localStorage) {
                return 'local storage';
            } else if (instance === sessionStorage) {
                return 'session storage';
            }
        }

        Storage.prototype['worker'] = function () {
            if (this.env().development) {
                return this[`[[development]]`];
            } else {
                return this[`[[production]]`];
            }
        }

    }

}

export default PrototypeFunction;