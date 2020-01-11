import Encoder from './encoder.js'
import Development from './development.js'
import Production from './production.js'
import defaults from './defaults.js'

export function base(args, init) {

    Storage.prototype[`__encoder`] = new Encoder(args.key)
    Storage.prototype[`__development`] = new Development()
    Storage.prototype[`__production`] = new Production()
    Storage.prototype[`__base`] = {}

    if (!init)
        for (let def of defaults)
            Storage.prototype[`__base`][`_${def}`] = Storage.prototype[def]

    Object.keys(args)
        .map(attr => Storage.prototype[`__${attr}`] = args[attr])

    Storage.prototype['env'] = function () {
        return this['__dev'] ?
            this['__development'] :
            this['__production']
    }

}

export default base