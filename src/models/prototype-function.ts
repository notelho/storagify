import StorageEnvironment from './storage-environment.js';
import nativeDefaults from '../utils/native-defaults';

export class PrototypeFunction {

    constructor() { }

    start(env: StorageEnvironment) {

        Storage.prototype[`__native`]['setItem'] = Storage.prototype['setItem'];
        Storage.prototype[`__native`]['getItem'] = Storage.prototype['getItem'];
        Storage.prototype[`__native`]['removeItem'] = Storage.prototype['removeItem'];
        Storage.prototype[`__native`]['clear'] = Storage.prototype['clear'];

        for (let functionName of Object.keys(nativeDefaults)) {
            Storage.prototype[functionName] = nativeDefaults[functionName];
        }

        Storage.prototype['env'] = function () {
            return this[`__environment`];
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
                return this[`__development`];
            } else {
                return this[`__production`];
            }
        }

    }

}

export default PrototypeFunction;