import storage from "./storage.js";

export const storagify = {

    init: (key, options = { dev: false, debug: false }) => {

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

        storage.base(opt)
        storage.proto(opt)
        storage.start(opt)

    }

}

export default storagify