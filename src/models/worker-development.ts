import * as conversor from '../conversor'

import Worker from './worker'


export class Development extends Worker {

    constructor() {
        super();
    }

    public get(key: string, instance: Storage): any {

        // const { calls } = this.from(instance);

        //         const base = this._translate(instance).base,
        //             value = base.getItem(`${consts.devkey}${key}`),
        //             parsed = this._parse(value)
        //         return parsed.val

        return
    }

    public set(key: string, value: any, instance: Storage, timestamp?: number): void {
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
        return
    }

    public delete(key: string, instance: Storage): void {
        //         this._translate(instance)
        //             .base
        //             .removeItem(`${consts.devkey}${key}`)
        return
    }

    public list(instance: Storage): string[] {
        //         return new Array(this._len(instance))
        //             .fill(false)
        //             .map((v, i) => i)
        //             .map((v) => instance.key(v))
        //             .map((v) => v = v.replace(consts.devkey, ''))
        return []
    }

    public when(key: string, instance: Storage): Date {
        //         const
        //             base = this._translate(instance).base,
        //             value = base.getItem(`${consts.devkey}${key}`),
        //             parsed = this._parse(value)
        //         return new Date(parsed.timestamp)
        return new Date()
    }

    public clear(instance: Storage): void {
        //         this._translate(instance)
        //             .base
        //             .clear()
        return
    }

    public start(instance: Storage): void {
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
        return
    }

}

export default Development;