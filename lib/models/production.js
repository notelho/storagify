export class Production {

    constructor() { }

    get(key, instance) {
        // const
        //     encoder = this._encoder(),
        //     base = this._base(),
        //     value = base._getItem(encoder.hash(key)),
        //     decoded = encoder.decode(value)
        // return this._parse(decoded)
    }

    set(key, value, instance, timestamp = null) {

        const { encoder, base } = this._translate(instance)

        if (typeof value !== 'string')
            value = JSON.stringify(value)

        key = encoder.hash(key)
        value = encoder.encode(value)
        base.setItem(key, value)
    }

    delete(key, instance) {
        // const
        //     encoder = this._encoder(),
        //     base = this._base()
        // base._removeItem(encoder.hash(key))
    }

    list(instance) {
        // const
        //     encoder = this._encoder(),
        //     base = this._base()
        // return new Array(this.length)
        //     .fill(false)
        //     .map((v, i) => i)
        //     .map((v) => encoder.value(base._key(v)))
    }

    when(key, instance) {
        // const
        //     encoder = this._encoder(),
        //     base = this._base(),
        //     value = base._getItem(encoder.hash(key)),
        //     timestamp = encoder.when(value),
        //     parsed = parseInt(timestamp)
        // return new Date(parsed)
    }

    clear(instance) {

    }

    start(instance) {

        // pega dev = > prod

        // pega normal = > prod

    }

    _translate(instance) {

        let
            encoder = instance['__encoder'],
            storage = instance['__base'],
            base = {

                getItem: key => storage._getItem.call(instance, key),

                setItem: (key, value) => storage._setItem.call(instance, key, value),

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

}

export default Production
