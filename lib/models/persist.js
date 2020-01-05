import encoder from './encode.js'

export const persist = new class {

    constructor() { }

    get(key, storageInstance) {
        if (this._not_valid_key(key, storageInstance)) return undefined
        this._auto_switch(key, storageInstance)
        let v = storageInstance.getItem(encoder.hash(key))
        if (this.dev) return JSON.parse(v)['value']
        else return JSON.parse(encoder.decode(v))
    }

    set(key, value, storageInstance, timestamp = null) {
        if (this.dev)
            value = {
                value: value,
                dev: this.devkey,
                when: timestamp ?
                    timestamp :
                    new Date().getTime(),
                version: '1.0.0'
            }
        storageInstance.setItem(
            encoder.hash(key),
            encoder.encode(
                JSON.stringify(value)
            ))
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
        if (this._not_valid_key(key, storageInstance)) return undefined
        this._auto_switch(key, storageInstance)
        let v = storageInstance.getItem(encoder.hash(key))
        if (this.dev) return new Date(JSON.parse(v)['when'])
        else return encoder.when(v)
    }

    _auto_switch(key, storageInstance) {
        let
            value = storageInstance.getItem(key),
            v_def = value ? true : false,
            v_dev = false,
            v_prod = false

        try {
            let parsed = JSON.parse(storageInstance.getItem(key))
            if (parsed.dev && parsed.dev === this.devkey) {
                v_dev = true
                v_def = false
            }
        } catch (err) { }

        let prod_value = storageInstance.getItem(encoder._force_hash(key))
        if (typeof prod_value === 'string') {
            v_prod = true
            try {
                if (value === encoder._force_decode(prod_value)) v_def = false
            } catch (err) { }
        }

        if (v_def) {
            storageInstance.removeItem(key)
            this.set(key, value, storageInstance)
        } else {
            if (v_dev && !this.dev) this._dev_to_prod(key, value, storageInstance)
            else if (v_prod && this.dev) this._prod_to_dev(key, value, storageInstance)
        }
    }

    _prod_to_dev(key, value, storageInstance) {
        let
            enc_key = encoder._force_hash(key),
            enc_value = storageInstance.getItem(enc_key)
        storageInstance.removeItem(enc_key)
        try {
            value = JSON.parse(encoder._force_decode(enc_value))
            let when = encoder.when(enc_value).getTime()
            this.set(key, value, storageInstance, parseInt(when))
        } catch (err) { }
    }

    _dev_to_prod(key, value, storageInstance) {
        let
            v = JSON.parse(value)['value'],
            w = JSON.parse(value)['when']
        storageInstance.removeItem(key)
        storageInstance.setItem(
            encoder._force_hash(key),
            encoder._force_encode(JSON.stringify(v), w)
        )
    }

    _not_valid_key(key, storageInstance) {
        return !key || (!storageInstance.getItem(key) && !storageInstance.getItem(encoder._force_hash(key)))
    }
}

export default persist