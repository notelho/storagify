import * as storage from '../models/storage.js'
import persist from '../models/persist.js'
import encode from '../models/encode.js'

export const storagify = new class {

    constructor() {
        this.session = null
        this.storage = null
    }

    init(key, options = { dev: false, debug: false }) {

        if (!key || typeof key !== 'string')
            throw new Error('String key is required')

        if (len !== 16 && len !== 24 && len !== 32)
            throw new Error('String key must have 16, 24 or 32 bytes')

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

        this.session = new storage.Session()
        this.storage = new storage.Local()

    }

}

export default storagify


