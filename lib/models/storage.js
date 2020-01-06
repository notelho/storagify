import { Abstract } from './abstract.js';
import { persist } from './persist.js'
import { logger } from '../logs/debug.js'

export class Session extends Abstract {

    constructor(opt) {
        super(opt)
    }

    list() {
        return logger(this.debug, 'Listing all keys in session storage..',
            () => persist.list(sessionStorage)
        )
    }

    when(key) {
        return logger(this.debug, `Returning creation date of ${key} in session storage..`,
            () => persist.when(key, sessionStorage)
        )
    }

    getItem(key) {
        return logger(this.debug, `Returning value of ${key} in session storage..`,
            () => persist.get(key, sessionStorage)
        )
    }

    setItem(key, value) {
        return logger(this.debug, `Setting value of ${key} in session storage..`,
            () => persist.set(key, value, sessionStorage)
        )
    }

    removeItem(key) {
        return logger(this.debug, `Removing ${key} from session storage..`,
            () => persist.delete(key, sessionStorage)
        )
    }

    clear() {
        return logger(this.debug, `Cleaning session storage..`,
            () => sessionStorage.clear()
        )
    }

    encode() {
        return logger(this.debug, `Encoding all items in session storage..`,
            () => persist.encode(sessionStorage)
        )
    }

}

export class Local extends Abstract {

    constructor(opt) {
        super(opt)
    }

    list() {
        return logger(this.debug, 'Listing all keys in local storage..',
            () => persist.list(localStorage)
        )
    }

    when(key) {
        return logger(this.debug, `Returning creation date of ${key} in local storage..`,
            () => persist.when(key, localStorage)
        )
    }

    getItem(key) {
        return logger(this.debug, `Returning value of ${key} in local storage..`,
            () => persist.get(key, localStorage)
        )
    }

    setItem(key, value) {
        return logger(this.debug, `Setting value of ${key} in local storage..`,
            () => persist.set(key, value, localStorage)
        )
    }

    removeItem(key) {
        return logger(this.debug, `Removing ${key} from local storage..`,
            () => persist.delete(key, localStorage)
        )
    }

    clear() {
        return logger(this.debug, `Cleaning local storage..`,
            () => localStorage.clear()
        )
    }

    encode() {
        return logger(this.debug, `Encoding all items in local storage..`,
            () => persist.encode(localStorage)
        )
    }

}