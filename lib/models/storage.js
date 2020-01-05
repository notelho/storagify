import { Abstract } from './abstract.js';
import { persist } from './persist.js'

export class Session extends Abstract {

    constructor(opt) {
        super(opt)
    }

    list() {

    }

    when(key) {
        return persist.when(key, sessionStorage)
    }

    getItem(key) {
        return persist.get(key, sessionStorage)
    }

    setItem(key, value) {
        persist.set(key, value, sessionStorage)
    }

    removeItem(key) {
        persist.delete(key, sessionStorage)
    }

    clear() {
        sessionStorage.clear()
    }

}

export class Local extends Abstract {

    constructor(opt) {
        super(opt)
    }

    list() {

    }

    when(key) {
        return persist.when(key, localStorage)
    }

    getItem(key) {
        return persist.get(key, localStorage)
    }

    setItem(key, value) {
        persist.set(key, value, localStorage)
    }

    removeItem(key) {
        persist.delete(key, localStorage)
    }

    clear() {
        localStorage.clear()
    }
}