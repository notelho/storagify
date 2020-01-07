import defaults from './defaults.js'
import Encoder from './encoder.js'

export function base(args) {

    Storage.prototype[`[[base]]`] = {}

    for (let def of defaults)
        Storage.prototype[`[[base]]`][`_${def}`] = Storage.prototype[def]

    Object.keys(args)
        .map(attr => Storage.prototype[`[[${attr}]]`] = args[attr])

    Storage.prototype[`[[encoder]]`] = new Encoder(args.key)

}

export default base