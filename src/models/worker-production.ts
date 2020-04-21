import Worker from "./worker";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class WorkerProduction extends Worker {

    public get(instance: Storagify, key: string): any {
        // const
        //     { encoder, base } = this._translate(instance),
        //     value = base.getItem(encoder.hash(key)),
        //     decoded = encoder.decode(value)
        // return this._parse(decoded)
    }

    public set(instance: Storagify, key: string, value: any, timestamp?: number): void {
        // const { encoder, base } = this._translate(instance)
        // if (!value) value = "null"
        // if (typeof value !== 'string') value = JSON.stringify(value)
        // key = encoder.hash(key)
        // value = encoder.encode(value, timestamp)
        // base.setItem(key, value)
    }

    public delete(instance: Storagify, key: string): void {

        const { calls, encoder } = getFrom(instance);

        const enckey = encoder.encodeDES(key);

        calls.removeItem(enckey);

    }

    public list(instance: Storagify): string[] {
        // const encoder = this._translate(instance).encoder
        // return new Array(this._len(instance))
        //     .fill(false)
        //     .map((v, i) => i)
        //     .map((v) => encoder.value(instance.key(v)))
        return []
    }

    public when(instance: Storagify, key: string): Date | null {
        // const
        //     { encoder, base } = this._translate(instance),
        //     value = base.getItem(encoder.hash(key)),
        //     timestamp = encoder.when(value)
        // return timestamp
        return new Date()
    }

    public clear(instance: Storagify): void {

        getFrom(instance).calls.clear();

    }

    public key(instance: Storagify, index: number): string | null {

        const { calls, encoder } = getFrom(instance);

        const key = calls.key(index);

        if (key) {

            return encoder.decodeDES(key);

        } else {

            return null;

        }

    }

    public start(instance: Storagify): void {

        // verificar se existe a __config

        // 

    }

}

export default WorkerProduction;