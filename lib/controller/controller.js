import { SessionStorage } from '../models/session-storage.js'
import { LocalStorage } from '../models/local-storage.js'

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

        this.session = new SessionStorage(opt)
        this.storage = new LocalStorage(opt)

    }

}

export default storagify


