import consts from '../controller/consts.js'

export const converter = new class {

    isProd = (key, base, encoder) => {
        let
            val = base.getItem(key),
            prod = false
        try {
            if (encoder.when(val))
                prod = true
        } catch (err) { }
        return prod
    }

    isDev = (key, base) => {
        let
            devkey = consts.devkey,
            includes = key.includes(devkey),
            valid = false
        try {
            let val = JSON.parse(base.getItem(key))
            let timestamp = val['timestamp']
            if (timestamp) valid = true
        } catch (err) { }
        return includes && valid
    }

    prodToDev = (key, base, encoder) => {
        let
            encoded = base.getItem(key),
            value = encoder.decode(encoded),
            when = encoder.when(encoded).getTime()
        base.removeItem(key)
        key = encoder.value(key)
        return { key, value, when }
    }

    defaultToDev = (key, base) => {
        let value = base.getItem(key)
        base.removeItem(key)
        return { key, value }
    }

    devToProd = (key, base) => {
        let value = JSON.parse(base.getItem(key))
        base.removeItem(key)
        return {
            key: key.replace(consts.devkey, ''),
            value: value['val'],
            when: value['timestamp']
        }
    }

    defaultToProd = (key, base) => {
        let value = base.getItem(key)
        base.removeItem(key)
        return { key, value }
    }

}

export default converter 