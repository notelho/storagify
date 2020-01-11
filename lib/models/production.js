import consts from './const.js'
import encoder from './encoder.js'
import Abstract from './abstract.js'

export class Production extends Abstract {

    constructor() {
        super()
    }

    get(key, instance) {
        const
            { encoder, base } = this._translate(instance),
            value = base._getItem(encoder.hash(key)),
            decoded = encoder.decode(value)
        return this._parse(decoded)
    }

    set(key, value, instance, timestamp = null) {
        const { encoder, base } = this._translate(instance)
        if (!value) value = "null"
        if (typeof value !== 'string') value = JSON.stringify(value)
        key = encoder.hash(key)
        value = encoder.encode(value, timestamp)
        base._setItem(key, value)
    }

    delete(key, instance) {
        const { encoder, base } = this._translate(instance)
        base._removeItem(encoder.hash(key))
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
            value = base._getItem(encoder.hash(key)),
            timestamp = encoder.when(value)
        return timestamp
    }

    clear(instance) {
        this._translate(instance).base._clear()
    }

    start(instance) {
        const { encoder, base } = this._translate(instance)
        let keys = new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => instance.key(v))
        let dev_to_prod = (key) => {
            let parsed = JSON.parse(base._getItem(key)),
                fkey = key.replace(consts.devkey, ''),
                val = parsed['value'],
                when = parsed['timestamp']
            base._removeItem(key)
            this.set(fkey, val, instance, when)
        }
        let default_to_prod = (key) => {
            let val = base._getItem(key)
            base._removeItem(key)
            this.set(key, val, instance)
        }
        let is_prod = (key) => {
            let
                val = base._getItem(key),
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
                let val = JSON.parse(base._getItem(key))
                let timestamp = val['timestamp']
                if (timestamp) valid = true
            } catch (err) { }
            return includes && valid
        }
        for (let key of keys) {
            if (is_dev(key))
                dev_to_prod(key)
            else if (!is_prod(key))
                default_to_prod(key)
        }
    }

}

export default Production
