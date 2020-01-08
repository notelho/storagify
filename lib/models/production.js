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



        console.log(encoder);
        console.log(base);

        // const
        //     encoder = this._encoder(),
        //     base = this._base()
        // if (typeof value !== 'string')
        //     value = JSON.stringify(value)
        // key = encoder.hash(key)
        // value = encoder.encode(value, timestamp)
        // base._setItem(key, value)
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
            base = instance['__base']


        // key, value,

        base = {

            getItem: function (key) {

                base._getItem.call(instance, key)


            },

            setItem: function (key, value) {

                base._setItem.call(instance, key, value)

            },

            removeItem: function (key) {

                base._removeItem.call(instance, key)

            },

            clear: function () {

                base._clear.call(instance)

            }

        }


        base.get()


        console.log(instance);


        // .call( this, arg1, arg2)

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
