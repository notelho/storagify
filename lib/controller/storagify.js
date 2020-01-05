import * as storage from '../models/storage.js'
import persist from '../models/persist.js'
import encode from '../models/encode.js'
import errors from '../logs/errors.js'

export const storagify = new class {

    constructor() {
        this.session = null
        this.storage = null
    }

    init(key, options = { dev: false, debug: false }) {

        if (!key || typeof key !== 'string')
            throw errors.keyIsRequired()

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
            })

        encode.init(key)

        this.session = new storage.Session()
        this.storage = new storage.Local()

    }

}

export default storagify