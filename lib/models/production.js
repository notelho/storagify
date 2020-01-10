import consts from './const.js'
import encoder from './encoder.js'

export class Production {

    constructor() { }

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
        const { encoder, base } = this._translate(instance)
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
        const { encoder, base } = this._translate(instance)
        let keys = new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => instance.key(v))
        let dev_to_prod = (key) => {
            let parsed = JSON.parse(base.getItem(key)),
                fkey = key.replace(consts.devkey, ''),
                val = parsed['value'],
                when = parsed['timestamp']
            base.removeItem(key)
            this.set(fkey, val, instance, when)
        }
        let default_to_prod = (key) => {
            let val = base.getItem(key)
            base.removeItem(key)
            this.set(key, val, instance)
        }
        let is_prod = (key) => {
            let
                val = base.getItem(key),
                prod = false
            try {
                if (encoder.when(val))
                    prod = true
            } catch (err) { }
            return prod
        }
        let is_dev = (key) => {
            let
                devkey = consts.devkey,
                includes = key.includes(devkey),
                valid = false
            try {
                let val = JSON.parse(base.getItem(key))
                let timestamp = val['timestamp']
                if (timestamp) valid = true
            } catch (err) { }
            return includes && valid
        }
        for (let key of keys) {
            let value = base.getItem(key)
            if (is_dev(key))
                dev_to_prod(key, value)
            else if (!is_prod(key))
                default_to_prod(key, value)
        }
    }

    _translate(instance) {
        let
            encoder = instance['__encoder'],
            native = instance['__base'],
            base = {
                setItem: (key, value) => native._setItem.call(instance, key, value),
                getItem: key => native._getItem.call(instance, key),
                removeItem: key => native._removeItem.call(instance, key),
                clear: () => native._clear.call(instance)
            }
        return { encoder, base }
    }

    _parse(obj) {
        try {
            return JSON.parse(obj)
        } catch (err) {
            return obj
        }
    }

    _len(instance) {
        return instance.length
    }

}

export default Production
