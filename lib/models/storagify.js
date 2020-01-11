import storage from "./storage.js";

export const storagify = {

    initialized: false,

    init: function (key, options = { dev: false, debug: false }) {

        if (!localStorage || !sessionStorage)
            throw new Error('Storage instance not found')

        if (!key || typeof key !== 'string')
            throw new Error('String key not found')

        if (!options || typeof options !== 'object')
            options = {}

        const opt = {
            key: key,
            dev: options.dev,
            debug: options.debug
        }

        storage.base(opt, this.initialized)
        storage.proto(opt, this.initialized)
        storage.start(opt, this.initialized)

        this.initialized = true
    }

}

export default storagify