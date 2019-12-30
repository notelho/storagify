import errors from './errors.js'
import encode from './encode.js'

export const persist = new class {

    constructor() { }

    get(key, storageInstance) {
        let obj = storageInstance.getItem(encode.shaEncode(key))
        if (obj) {
            let decobj = encode.aesDecode(obj)
            try {
                if (this.dev) {
                    let parsed = JSON.parse(decobj)
                    if (parsed.type && parsed.type == this.devkey) {
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
                throw errors.badRead()
            }
        } else {
            if (storageInstance.getItem(key))
                throw errors.badRead()
            return undefined;
        }
    }

    set(key, value, storageInstance) {
        storageInstance.setItem(
            encode.shaEncode(key),
            this.dev ?
                encode.aesEncode(JSON.stringify({ value, dev: this.devkey })) :
                encode.aesEncode(JSON.stringify(value))
        )
    }

    delete(key, storageInstance) {
        storageInstance.removeItem(sha.encode(key, this.key))
    }

}

export default persist