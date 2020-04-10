import { storage } from "./storage";

import Environment from "../models/environment";

import Options from "../models/options";

class Storagify {

    key = ''

    initialized = false

    constructor() { }

    init(key: string, options?: Options) {

        if (!localStorage || !sessionStorage) {
            throw new Error('Storage instance not found');
        }

        if (!key || typeof key !== 'string') {
            throw new Error('String key not found');
        }

        if (!options || typeof options !== 'object') {
            options = {};
        }

        const env = new Environment(key, options.development, options.debug, options.stringify)

        storage.base(env, this.initialized)
        storage.proto(env, this.initialized)
        storage.start(env, this.initialized)

        if (this.key && this.key !== key)
            console.warn('Initializing with a different key than previously used may cause problems and errors.');

        this.initialized = true
        this.key = key

    }

    check() {



    }

}

const storagify = new Storagify()

export default storagify.init