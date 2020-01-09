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

        if (!value)
            value = "null"

        if (typeof value !== 'string')
            value = JSON.stringify(value)

        key = encoder.hash(key)
        value = encoder.encode(value, timestamp)
        base.setItem(key, value)
    }

    delete(key, instance) {

        const {
            encoder,
            base
        } = this._translate(instance)

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

        // dev = > prod

        // normal = > prod

    }

    _translate(instance) {

        let
            encoder = instance['__encoder'],
            storage = instance['__base'],
            base = {
                setItem: (key, value) => storage._setItem.call(instance, key, value),

                getItem: key => storage._getItem.call(instance, key),

                removeItem: key => storage._removeItem.call(instance, key),

                clear: () => storage._clear.call(instance)
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
