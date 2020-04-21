import Worker from './worker'
import Storagify from './storagify';
import getWhen from '../utils/get-when';
import getCalls from '../utils/get-calls';

export class WorkerDevelopment extends Worker {

    constructor() {
        super();
    }

    public get(instance: Storagify, key: string): any {

        const { calls, parser } = this.from(instance);
        const value = calls.getItem(key);
        const parsed = parser.parse(value);

        return parsed;
    }

    public set(instance: Storagify, key: string, value: any): void {

        const timestamp = new Date().getTime();

        const { configurator } = this.from(instance);

        configurator.update(instance, key, value, timestamp);

        //         const base = this._translate(instance).base
        //         if (!value)
        //             value = null
        //         key = `${consts.devkey}${key}`
        //         value = {
        //             val: this._parse(value),
        //             timestamp: timestamp 
        //         }
        //         base.setItem(key, JSON.stringify(value))

    }

    public delete(instance: Storagify, key: string): void {

        this.from(instance).calls.removeItem(key);

    }

    public list(instance: Storagify): string[] {

        const calls = getCalls(instance);
        const emptyArray = new Array(instance.length);
        const indexArray = emptyArray.map((v, i) => i);
        const keysArray = indexArray.map(v => calls.key(v));

        return <string[]>keysArray;
    }

    public when(instance: Storagify, key: string): Date | null {

        return getWhen(instance, key);

    }

    public clear(instance: Storagify): void {

        this.from(instance).calls.clear();

    }

    public key(instance: Storagify, index: number): string | null {

        return getCalls(instance).key(index);

    }

    public start(instance: Storagify): void {

        const { configurator, encoder, calls } = this.from(instance);

        configurator.start(instance);

        //         const

        //             keys = new Array(this._len(instance))
        //                 .fill(false)
        //                 .map((v, i) => i)
        //                 .map((v) => instance.key(v))

        //         for (let k of keys) {
        //             if (converter.isProd(k, base, encoder)) {
        //                 let d = converter.prodToDev(k, base, encoder)
        //                 this.set(d.key, d.value, instance, d.when)
        //             } else if (!converter.isDev(k, base)) {
        //                 let d = converter.defaultToDev(k, base)
        //                 this.set(d.key, d.value, instance)
        //             }
        //         }

    }

}

export default WorkerDevelopment;