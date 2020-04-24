import Worker from './worker'
import Storagify from './storagify';
import getTime from '../utils/get-time';
import getFrom from '../utils/get-from';

export class WorkerDevelopment extends Worker {

    public get(instance: Storagify, key: string): any {

        const { calls, parser } = getFrom(instance);

        const value = calls.getItem(key);

        const parsed = parser.parse(value);

        return parsed;

    }

    public set(instance: Storagify, key: string, value: any): void {

        const { configurator, parser, calls } = getFrom(instance);

        const timestamp = getTime();

        const stringValue = parser.stringfy(value);

        calls.setItem(key, stringValue);

        configurator.doCheck(instance);

        configurator.update(instance, key, timestamp);

    }

    public delete(instance: Storagify, key: string): void {

        getFrom(instance).calls.removeItem(key);

    }

    public list(instance: Storagify): string[] {

        const { calls } = getFrom(instance);

        const emptyArray = new Array(instance.length);

        const indexArray = emptyArray.map((v, i) => i);

        const keysArray = indexArray.map(v => calls.key(v));

        return <string[]>keysArray;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { configurator } = getFrom(instance);

        configurator.doCheck(instance);

        return configurator.when(instance, key);

    }

    public clear(instance: Storagify): void {

        getFrom(instance).calls.clear();

    }

    public key(instance: Storagify, index: number): string | null {

        return getFrom(instance).calls.key(index);

    }

    public start(instance: Storagify): void {

        const { configurator } = getFrom(instance);

        configurator.toDevelopment(instance);

    }

}

export default WorkerDevelopment;