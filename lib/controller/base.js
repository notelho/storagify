import Encoder from '../models/encoder.js'
import Development from '../models/development.js'
import Production from '../models/production.js'
import consts from './consts.js'

export function base(args, init) {

    Storage.prototype[`__encoder`] = new Encoder(args.key)

    if (!init) {
        Storage.prototype[`__development`] = new Development()
        Storage.prototype[`__production`] = new Production()
        Storage.prototype[`__base`] = {}
        for (let def of consts.defaults)
            Storage.prototype[`__base`][`_${def}`] = Storage.prototype[def]
    }

    Object.keys(args)
        .map(attr => Storage.prototype[`__${attr}`] = args[attr])

    Storage.prototype['env'] = function () {
        return this['__dev'] ?
            this['__development'] :
            this['__production']
    }

}

export default base