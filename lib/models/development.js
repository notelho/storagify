import Abstract from './abstract.js'
import consts from './const.js'
import encoder from './encoder.js'

export class Development extends Abstract {

    constructor() {
        super()
    }

    get(key, instance) {
        const base = this._translate(instance).base,
            value = base._getItem(`${consts.devkey}${key}`),
            parsed = this._parse(value)
        return parsed.val
    }

    set(key, value, instance, timestamp = null) {
        const base = this._translate(instance).base
        if (!value)
            value = null
        key = `${consts.devkey}${key}`
        value = {
            val: this._parse(value),
            timestamp: timestamp ?
                timestamp :
                new Date().getTime()
        }
        base._setItem(key, JSON.stringify(value))
    }

    delete(key, instance) {
        this._translate(instance)
            .base
            .removeItem(`${consts.devkey}${key}`)
    }

    list(instance) {
        return new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => instance.key(v))
            .map((v) => v = v.replace(consts.devkey, ''))
    }

    when(key, instance) {
        const
            base = this._translate(instance).base,
            value = base._getItem(`${consts.devkey}${key}`),
            parsed = this._parse(value)
        return new Date(parsed.timestamp)
    }

    clear(instance) {
        this._translate(instance).base._clear()
    }

    start(instance) {
        const { encoder, base } = this._translate(instance)
        let keys = new Array(this._len(instance))
            .fill(false)
            .map((v, i) => i)
            .map((v) => instance.key(v))
        let prod_to_dev = (key) => {
            // let parsed = JSON.parse(base._getItem(key)),
            //     fkey = key.replace(consts.devkey, ''),
            //     val = parsed['value'],
            //     when = parsed['timestamp']
            // base._removeItem(key)
            // this.set(fkey, val, instance, when)

            let
                value = base._getItem(base.hash(key)),
                decoded = encoder.decode(value),
                when = encoder.decode(value)

            console.log(decoded);
            console.log(when);


        }
        let default_to_dev = (key) => {
            let val = base._getItem(key)
            base._removeItem(key)
            this.set(key, val, instance)
        }
        let is_prod = (key) => {
            let
                val = base._getItem(key),
                prod = false
            try {
                if (encoder.when(val))
                    prod = true
            } catch (err) { }
            return prod
        }
        let is_dev = (key) => {
            let
                devkey = consts.devkey,
                includes = key.includes(devkey),
                valid = false
            try {
                let val = JSON.parse(base._getItem(key))
                let timestamp = val['timestamp']
                if (timestamp) valid = true
            } catch (err) { }
            return includes && valid
        }
        for (let key of keys) {
            if (is_prod(key))
                prod_to_dev(key)
            else if (!is_dev(key))
                default_to_dev(key)
        }
    }

}

export default Development

// return options , { debug: true, stringfy: true}
function testes(k, instance, timestamp = null) {

    let key = 'teste'
    localStorage.setItem(key, '3294')
    let value = localStorage.getItem(key)

    try {
        value = JSON.parse(value)
    } catch (err) { }

    localStorage.removeItem('teste')
    let newkey = '__teste__teste'

    let newvalue = {
        val: value,
        timestamp: new Date().getTime()
    }

    localStorage.setItem(newkey, JSON.stringify(newvalue))
    localStorage.getItem('__teste__' + key)['val']
    let a = localStorage.getItem('__teste__' + key)['timestamp']

    return new Date(parseInt(a))



}