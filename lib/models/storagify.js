import storage from "storage.js";

export const storagify = {

    init: (key, options = { dev: false, debug: false }) => {

        // checar se localstorage ta disponivel

        if (!key || typeof key !== 'string')
            key = 'passtostorage'

        if (!options || typeof options !== 'object')
            options = {}

        const opt = {
            key: key,
            dev: options.dev,
            debug: options.debug
        }

        storage.base(opt)
        storage.encode(opt)
        storage.proto(opt)
        storage.start(opt)

    }

}

export default storagify