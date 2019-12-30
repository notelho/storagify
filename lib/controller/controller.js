import * as storage from '../models/storage.js'
import persist from '../models/persist.js'
import encode from '../models/encode.js'

export const storagify = new class {

    constructor() {
        this.session = null
        this.storage = null
    }

    init(key, options = { dev: false, debug: false }) {

        if (!key)
            throw new Error('Encode key is required')

        const opt = {
            key: key,
            devkey: '63f28043',
            dev: options.dev,
            debug: options.debug,
        }

        Object.keys(opt)
            .map(key => {
                encode[key] = opt[key]
                persist[key] = opt[key]
            })

        this.session = new storage.Session()
        this.storage = new storage.Local()

    }

}

export default storagify


