import StorageEnvironment from './storage-environment';
import Prototype from './prototype';
import Storagify from './storagify';
import getWorker from '../utils/get-worker';
import returner from '../utils/returner';
import Defaults from '../utils/defaults';

export class PrototypeFunction implements Prototype {

	constructor() { }

	start(env: StorageEnvironment): void {

		// =====================================================================================

		Storage.prototype['list'] = function (): string[] {
			const instance = <Storagify>this;
			const action: string = `Listing all keys in ${Defaults.describeKey}..`;
			return returner(instance, action, function () {
				return getWorker(instance).list(instance);
			});
		}

		Storage.prototype['when'] = function (key: string): Date {
			const instance = <Storagify>this;
			const action: string = `Returning creation date of ${key} in {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).when(instance, key);
			});
		};

		Storage.prototype['start'] = function (): void {
			const instance = <Storagify>this;
			const action: string = `Initializing {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).start(instance);
			});
		};

		// =====================================================================================

		Storage.prototype['getItem'] = function (key: string): any {
			const instance = <Storagify>this;
			const action: string = `Returning value of ${key} in {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).get(instance, key);
			});
		};

		Storage.prototype['setItem'] = function (key: string, value: any): void {
			const instance = <Storagify>this;
			const action: string = `Setting value of ${key} in {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).set(instance, key, value);
			});
		};

		Storage.prototype['removeItem'] = function (key: string): void {
			const instance = <Storagify>this;
			const action: string = `Removing ${key} from {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).delete(instance, key);
			});
		};

		Storage.prototype['clear'] = function (): void {
			const instance = <Storagify>this;
			const action: string = `Cleaning {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).clear(instance);
			});
		};

		Storage.prototype['key'] = function (index: number): string | null {
			const instance = <Storagify>this;
			const action: string = `Looking for a key at index ${index} in {{instance}}..`;
			return returner(instance, action, function () {
				return getWorker(instance).key(instance, index);
			});
		};

		// =====================================================================================

	}

}

export default PrototypeFunction;
