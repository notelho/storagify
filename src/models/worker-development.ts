import Worker from './worker'
import Storagify from './storagify';
import * as conversor from '../conversor'

export class WorkerDevelopment extends Worker {

    constructor() {
        super();
    }

    public get(key: string, instance: Storagify): any {

        // const { calls } = this.from(instance);

        //         const base = this._translate(instance).base,
        //             value = base.getItem(`${consts.devkey}${key}`),
        //             parsed = this._parse(value)
        //         return parsed.val

        return ''
    }

    public set(key: string, value: any, instance: Storagify, timestamp?: number): void {
        //         const base = this._translate(instance).base
        //         if (!value)
        //             value = null
        //         key = `${consts.devkey}${key}`
        //         value = {
        //             val: this._parse(value),
        //             timestamp: timestamp ?
        //                 timestamp :
        //                 new Date().getTime()
        //         }
        //         base.setItem(key, JSON.stringify(value))

    }

    public delete(key: string, instance: Storagify): void {
        //         this._translate(instance)
        //             .base
        //             .removeItem(`${consts.devkey}${key}`)

    }

    public list(instance: Storagify): string[] {
        //         return new Array(this._len(instance))
        //             .fill(false)
        //             .map((v, i) => i)
        //             .map((v) => instance.key(v))
        //             .map((v) => v = v.replace(consts.devkey, ''))
        return []
    }

    public when(key: string, instance: Storagify): Date {
        //         const
        //             base = this._translate(instance).base,
        //             value = base.getItem(`${consts.devkey}${key}`),
        //             parsed = this._parse(value)
        //         return new Date(parsed.timestamp)
        return new Date()
    }

    public clear(instance: Storagify): void {
        //         this._translate(instance)
        //             .base
        //             .clear()
        return
    }

    public key(index: number, instance: Storagify): string | null {

        return ''
    }

    public start(instance: Storagify): void {
        //         const
        //             { encoder, base } = this._translate(instance),
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