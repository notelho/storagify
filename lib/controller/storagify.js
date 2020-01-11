import storage from "./storage.js";

export const storagify = {

    key: '',

    initialized: false,

    init: function (key, options = { dev: false, debug: false, stringify: false }) {

        if (!localStorage || !sessionStorage)
            throw new Error('Storage instance not found')

        if (!key || typeof key !== 'string')
            throw new Error('String key not found')

        if (!options || typeof options !== 'object')
            options = {}

        const opt = {
            key: key,
            dev: options.dev,
            debug: options.debug,
            stringify: options.stringify
        }

        storage.base(opt, this.initialized)
        storage.proto(opt, this.initialized)
        storage.start(opt, this.initialized)

        if (this.key && this.key !== key)
            console.warn('Initializing with a different key than previously used may cause problems and errors.');

        this.initialized = true
        this.key = key

    }

}

export default storagify