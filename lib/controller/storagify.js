import * as stgClass from '../models/storage.js'
import persist from '../models/persist.js'
import encode from '../models/encode.js'
import converter from '../models/converter.js'
import errors from '../logs/errors.js'

export const storagify = new class {

    constructor() {
        this.session = null
        this.storage = null
    }

    init(key, options = { dev: false, debug: false }) {

        if (!key || typeof key !== 'string')
            errors.keyIsRequired()

        if (!options || typeof options !== 'object')
            options = {}

        const opt = {
            key: key,
            devkey: key,
            dev: options.dev,
            debug: options.debug,
        }

        Object.keys(opt)
            .map(k => {
                encode[k] = opt[k]
                persist[k] = opt[k]
                converter[k] = opt[k]
            })

        encode.init(key)

        this.session = new stgClass.Session(opt)
        this.storage = new stgClass.Local(opt)

    }

}

export function init(key, options = { dev: false, debug: false }) {
    storagify.init(key, options)
}

export function session() {
    if (!storagify.session)
        errors.callInitFunc('session()')
    return storagify.session
}

export function storage() {
    if (!storagify.storage)
        errors.callInitFunc('storage()')
    return storagify.storage
}

export default storagify