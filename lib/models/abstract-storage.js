import { EncodedStorage } from './encoded-storage.js'

export class AbstractStorage extends EncodedStorage {

    constructor(options) {

        super(options)

        if (this._dev)
            console.warn('Running storagify in development mode');

        if (this._debug)
            console.warn('Running storagify in debug mode');

    }

    get(key, storageInstance) {
        let obj = storageInstance.getItem(this._shaEncode(key))
        if (obj) {
            let decobj = this._aesDecode(obj)
            try {
                if (this._dev) {
                    let parsed = JSON.parse(decobj)
                    if (parsed.type && parsed.type == this._devkey) {
                        return parsed.value
                    } else {
                        throw ''
                    }
                } else {
                    try {
                        return JSON.parse(decobj)
                    } catch (notAnObject) {
                        return decobj
                    }
                }
            } catch (externalAcess) {
                throw this._getError()
            }
        } else {
            if (storageInstance.getItem(key))
                throw this._getError()
            return undefined;
        }
    }

    set(key, value, storageInstance) {
        storageInstance.setItem(
            this._shaEncode(key),
            this._dev ?
                this._aesEncode(JSON.stringify({ value, dev: this._devkey })) :
                this._aesEncode(JSON.stringify(value))
        )
    }

    delete(key, storageInstance) {
        storageInstance.removeItem(sha.encode(key, this.key))
    }

    getError() {
        return new Error('Trying to access a value setted outside the library. Use storagify.instance.setItem() instead.')
    }

}