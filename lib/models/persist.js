import development from './development.js'
import production from './production.js'

export const persist = new class {

    constructor() { }

    get(key, instance) {
        return this.env(instance).get(key, instance)
    }

    set(key, value, instance, timestamp = null) {
        return this.env(instance).set(key, value, instance, timestamp)
    }

    delete(key, instance) {
        return this.env(instance).delete(key, instance)
    }

    list(instance) {
        return this.env(instance).list(instance)
    }

    when(key, instance) {
        return this.env(instance).when(key, instance)
    }

    start(instance) {
        return this.env(instance).start(instance)
    }

    env(instance) {
        return instance['[[dev]]'] ?
            development :
            production
    }

}

export default persist