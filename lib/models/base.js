import Encoder from './encoder.js'
import development from './development.js'
import production from './production.js'
import defaults from './defaults.js'

export function base(args) {

    Storage.prototype[`[[encoder]]`] = new Encoder(args.key)
    Storage.prototype[`[[development]]`] = development
    Storage.prototype[`[[production]]`] = production
    Storage.prototype[`[[base]]`] = {}

    for (let def of defaults)
        Storage.prototype[`[[base]]`][`_${def}`] = Storage.prototype[def]

    Object.keys(args)
        .map(attr => Storage.prototype[`[[${attr}]]`] = args[attr])

    Storage.prototype['env'] = function () {
        return this['[[dev]]'] ?
            this['[[development]]'] :
            this['[[production]]']
    }

}

export default base