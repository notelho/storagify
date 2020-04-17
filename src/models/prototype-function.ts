import describer from '../utils/describer';
import StorageEnvironment from './storage-environment.js';
import Prototype from './prototype';
import Storagify from './storagify';
import Encoder from './encoder';

export class PrototypeFunction implements Prototype {

    constructor() { }

    start(env: StorageEnvironment): void {

        Storage.prototype['list'] = function (): string[] {
            const instance = <Storagify>this;
            const action: string = `Listing all keys in {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().list(instance);
            });
        }

        Storage.prototype['when'] = function (key: string): Date {
            const instance = <Storagify>this;
            const action: string = `Returning creation date of ${key} in {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().when(key, instance);
            });
        }

        Storage.prototype['getItem'] = function (key: string): any {
            const instance = <Storagify>this;
            const action: string = `Returning value of ${key} in {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().get(key, instance);
            });
        }

        Storage.prototype['setItem'] = function (key: string, value: any): void {
            const instance = <Storagify>this;
            const action: string = `Setting value of ${key} in {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().set(key, value, instance);
            });
        }

        Storage.prototype['removeItem'] = function (key: string): void {
            const instance = <Storagify>this;
            const action: string = `Removing ${key} from {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().delete(key, instance);
            });
        }

        Storage.prototype['clear'] = function (): void {
            const instance = <Storagify>this;
            const action: string = `Cleaning {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().clear(instance);
            });
        }

        Storage.prototype['key'] = function (index: number): string | null {
            const instance = <Storagify>this;
            const action: string = `Looking for a key at index ${index} in {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().key(index, instance);
            });
        }

        Storage.prototype['start'] = function (): void {
            const instance = <Storagify>this;
            const action: string = `Initializing {{instance}}..`;
            return describer(instance, action, function () {
                return instance.worker().start(instance);
            });
        }

        Storage.prototype['type'] = function (): string {
            if (this === localStorage) {
                return 'local storage';
            } else {
                return 'session storage';
            }
        }

        Storage.prototype['encoder'] = function (type: 'encryptor' | 'parser'): Encoder {
            if (type === 'encryptor') {
                return this[`[[encryptor]]`];
            } else {
                return this[`[[parser]]`];
            }
        }

        Storage.prototype['worker'] = function (): Worker {
            if (this.env().development) {
                return this[`[[development]]`];
            }
            return this[`[[production]]`];
        }

        Storage.prototype['env'] = function (): StorageEnvironment {
            return this[`[[environment]]`];
        }

    }

}

export default PrototypeFunction;