import Abstract from './abstract.js'
import converter from './converter.js'
import consts from './consts.js'

export class Production extends Abstract {

    constructor() {
        super()
    }

    get(key, instance) {
        const
            { encoder, base } = this._translate(instance),
            value = base.getItem(encoder.hash(key)),
            decoded = encoder.decode(value)
        return this._parse(decoded)
    }

    set(key, value, instance, timestamp = null) {
        const { encoder, base } = this._translate(instance)
        if (!value) value = "null"
        if (typeof value !== 'string') value = JSON.stringify(value)
        key = encoder.hash(key)
        value = encoder.encode(value, timestamp)
        base.setItem(key, value)
    }

    delete(key, instance) {
        const { encoder, base } = this._translate(instance)
        base.removeItem(encoder.hash(key))
    }

    list(instance) {
        const encoder = this._translate(instance).encoder
        return new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => encoder.value(instance.key(v)))
    }

    when(key, instance) {
        const
            { encoder, base } = this._translate(instance),
            value = base.getItem(encoder.hash(key)),
            timestamp = encoder.when(value)
        return timestamp
    }

    clear(instance) {
        this._translate(instance).base.clear()
    }

    start(instance) {

        console.log('entrou aqui');

        const { encoder, base } = this._translate(instance)
        let keys = new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => instance.key(v))

        console.log(keys);

        for (let key of keys) {
            if (converter.isDev(key, base)) {
                console.log('leu dev');

                let d = converter.devToProd(key, base)
                this.set(d.key, d.value, instance, d.when)
            } else if (!converter.isProd(key, base, encoder)) {
                let d = converter.defaultToProd(key, base)
                this.set(d.key, d.value, instance)
            }
        }
    }

}

export default Production
