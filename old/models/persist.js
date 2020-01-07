import encoder from './encode.js'
import converter from './converter.js'

export const persist = new class {

    constructor() { }

    get(key, storageInstance) {
        if (converter.notValidKey(key, storageInstance))
            return undefined
        converter.autoSwitch(key, storageInstance)
        let v = storageInstance.getItem(encoder.hash(key))
        if (this.dev)
            try {
                return JSON.parse(JSON.parse(v)['value'])
            } catch (err) {
                return JSON.parse(v)['value']
            }
        else return JSON.parse(encoder.decode(v))
    }

    set(key, value, storageInstance, timestamp = null) {
        if (this.dev)
            value = {
                value: value,
                dev: this.devkey,
                when: timestamp ? timestamp : new Date().getTime(),
                version: '1.0.0'
            }
        storageInstance.setItem(encoder.hash(key), encoder.encode(JSON.stringify(value)))
    }

    delete(key, storageInstance) {
        storageInstance.removeItem(sha.encode(key, this.key))
    }

    list(storageInstance) {
        return new Array(storageInstance.length)
            .fill('')
            .map((k, i) => encoder.fromHash(
                storageInstance.key(i)))
    }

    when(key, storageInstance) {
        if (converter.notValidKey(key, storageInstance))
            return undefined
        converter.autoSwitch(key, storageInstance)
        let v = storageInstance.getItem(encoder.hash(key))
        if (this.dev)
            return new Date(JSON.parse(v)['when'])
        else
            return encoder.when(v)
    }

    encode(storageInstance) {
        for (let key of this.list(storageInstance))
            converter.autoSwitch(key, storageInstance)
    }

}

export default persist