export class Abstract {

    constructor() { }

    get(key, instance) {
        throw new Error('Function get must be implemented')
    }

    set(key, value, instance, timestamp = null) {
        throw new Error('Function set must be implemented')
    }

    delete(key, instance) {
        throw new Error('Function delete must be implemented')
    }

    list(instance) {
        throw new Error('Function list must be implemented')
    }

    when(key, instance) {
        throw new Error('Function when must be implemented')
    }

    clear(instance) {
        throw new Error('Function clear must be implemented')
    }

    start(instance) {
        throw new Error('Function start must be implemented')
    }

    _translate(instance) {
        let
            encoder = instance['__encoder'],
            native = instance['__base'],
            base = {
                setItem: (key, value) => native._setItem.call(instance, key, value),
                getItem: key => native._getItem.call(instance, key),
                removeItem: key => native._removeItem.call(instance, key),
                clear: () => native._clear.call(instance)
            }
        return { encoder, base }
    }

    _parse(obj) {
        try {
            return JSON.parse(obj)
        } catch (err) {
            return obj
        }
    }

    _len(instance) {
        return instance.length
    }

}