
export const development = new class {

    constructor() { }

    get(key, instance) {
        //         if (converter.notvalid(key, instance))
        //             return undefined

        //         converter.autoSwitch(key, instance)

        //         let v = instance.getItem(encoder.hash(key))

        //         if (this.dev)
        //             try {
        //                 return JSON.parse(JSON.parse(v)['value'])
        //             } catch (err) {
        //                 return JSON.parse(v)['value']
        //             }

        //         else return JSON.parse(encoder.decode(v))
    }

    set(key, value, instance, timestamp = null) {
        //         if (this.dev)
        //             value = {
        //                 value: value,
        //                 dev: this.devkey,
        //                 when: timestamp ? timestamp : new Date().getTime(),
        //                 version: '1.0.0'
        //             }
        //         storageInstance._setItem(encoder.hash(key), encoder.encode(JSON.stringify(value)))
    }

    delete(key, instance) {
        // storageInstance.removeItem(sha.encode(key, this.key))
    }

    list(instance) {
        //         return new Array(storageInstance.length)
        //             .fill('')
        //             .map((k, i) => encoder.fromHash(
        //                 storageInstance.key(i)))
    }

    when(key, instance) {
        //         if (converter.notvalid(key, storageInstance))
        //             return undefined
        //         converter.autoSwitch(key, storageInstance)
        //         let v = storageInstance.getItem(encoder.hash(key))
        //         if (this.dev)
        //             return new Date(JSON.parse(v)['when'])
        //         else
        //             return encoder.when(v)
    }

    start(instance) {

    }

}

export default development
