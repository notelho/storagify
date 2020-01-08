export const production = {

    // constructor() { }

    // get(key, instance) {
    //     const
    //         encoder = this._encoder(instance),
    //         base = this._base(instance),
    //         value = base._getItem(encoder.hash(key)),
    //         decoded = encoder.decode(value)
    //     return this._parse(decoded)
    // }

    // set(key, value, instance, timestamp = null) {
    //     const
    //         encoder = this._encoder(instance),
    //         base = this._base(instance)
    //     if (typeof value !== 'string')
    //         value = JSON.stringify(value)
    //     key = encoder.hash(key)
    //     value = encoder.encode(value, timestamp)
    //     base._setItem(key, value)
    // }

    // delete(key, instance) {
    //     const
    //         encoder = this._encoder(instance),
    //         base = this._base(instance)
    //     base._removeItem(encoder.hash(key))
    // }

    // list(instance) {
    //     const encoder = this._encoder(instance)
    //     return new Array(instance.length)
    //         .fill(false)
    //         .map((v, i) => i)
    //         .map((v) => encoder.value(instance.key(v)))
    // }

    // when(key, instance) {
    //     let
    //         encoder = this._encoder(instance),
    //         value = instance._getItem(encoder.hash(key)),
    //         timestamp = encoder.when(value),
    //         parsed = parseInt(timestamp)
    //     return new Date(parsed)
    // }

    // start(instance) {

    //     // pega dev = > prod

    //     // pega normal = > prod

    // }

    // _parse(obj) {
    //     try {
    //         return JSON.parse(obj)
    //     } catch (err) {
    //         return obj
    //     }
    // }

    // _encoder(instance) {
    //     return instance['[[encoder]]']
    // }

    // _base(instance) {
    //     return instance['[[base]]']
    // }

}

export default production
