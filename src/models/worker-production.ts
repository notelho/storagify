import Worker from "./worker";
import Storagify from "./storagify";
import * as conversor from '../conversor'

export class WorkerProduction extends Worker {

    constructor() {
        super()
    }

    public get(key: string, instance: Storagify): any {
        // const
        //     { encoder, base } = this._translate(instance),
        //     value = base.getItem(encoder.hash(key)),
        //     decoded = encoder.decode(value)
        // return this._parse(decoded)
    }

    public set(key: string, value: any, instance: Storagify, timestamp?: number): void {
        // const { encoder, base } = this._translate(instance)
        // if (!value) value = "null"
        // if (typeof value !== 'string') value = JSON.stringify(value)
        // key = encoder.hash(key)
        // value = encoder.encode(value, timestamp)
        // base.setItem(key, value)
    }

    public delete(key: string, instance: Storagify): void {
        // const { encoder, base } = this._translate(instance)
        // base.removeItem(encoder.hash(key))
    }

    public list(instance: Storagify): string[] {
        // const encoder = this._translate(instance).encoder
        // return new Array(this._len(instance))
        //     .fill(false)
        //     .map((v, i) => i)
        //     .map((v) => encoder.value(instance.key(v)))
        return []
    }

    public when(key: string, instance: Storagify): Date {
        // const
        //     { encoder, base } = this._translate(instance),
        //     value = base.getItem(encoder.hash(key)),
        //     timestamp = encoder.when(value)
        // return timestamp
        return new Date()
    }

    public clear(instance: Storagify): void {
        // this._translate(instance).base.clear()
    }

    public key(index: number, instance: Storagify): string | null {
        return ''
    }

    public start(instance: Storagify): void {
        // const { encoder, base } = this._translate(instance),
        //     keys = new Array(this._len(instance))
        //         .fill(false)
        //         .map((v, i) => i)
        //         .map((v) => instance.key(v))
        // for (let key of keys) {
        //     if (converter.isDev(key, base)) {
        //         let d = converter.devToProd(key, base)
        //         this.set(d.key, d.value, instance, d.when)
        //     } else if (!converter.isProd(key, base, encoder)) {
        //         let d = converter.defaultToProd(key, base)
        //         this.set(d.key, d.value, instance)
        //     }
        // }
    }

}

export default WorkerProduction;