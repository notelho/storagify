import errors from './errors.js'
import encoder from './encode.js'

export const persist = new class {

    constructor() { }

    get(key, storageInstance) {
        let obj = storageInstance.getItem(encoder.hash(key))
        if (obj) {
            let decobj = encoder.decode(obj)
            try {
                if (this.dev) {
                    let parsed = JSON.parse(decobj).replaceAll('"', '\"')

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
            return undefined
        }
    }

    set(key, value, storageInstance) {
        storageInstance.setItem(
            encoder.hash(key),
            this.dev ?
                encoder.encode(JSON.stringify({ value, dev: this.devkey })) :
                encoder.encode(JSON.stringify(value))
        )
    }

    delete(key, storageInstance) {
        storageInstance.removeItem(sha.encode(key, this.key))
    }

}

export default persist