import logger from '../logs/debug.js'
import persist from './persist.js'
import type from './type.js'

const abstract = {

    list: function () {
        return logger(this, `Listing all keys in ${type(this)}..`,
            () => persist.list(this)
        )
    },

    when: function (key) {
        return logger(this, `Returning creation date of ${key} in ${type(this)}..`,
            () => persist.when(key, this)
        )
    },

    getItem: function (key) {
        return logger(this, `Returning value of ${key} in ${type(this)}..`,
            () => persist.get(key, this)
        )
    },

    setItem: function (key, value) {
        return logger(this, `Setting value of ${key} in ${type(this)}..`,
            () => persist.set(key, value, this)
        )
    },

    removeItem: function (key) {
        return logger(this, `Removing ${key} from ${type(this)}..`,
            () => persist.delete(key, this)
        )
    },

    clear: function () {
        return logger(this, `Cleaning ${type(this)}..`,
            () => this._clear()
        )
    },

    _start: function () {
        return logger(this, `Initializing ${type(this)}..`,
            () => persist.start(this)
        )
    }

}

export function proto(args) {

    for (let attr of Object.keys(abstract))

        Storage.prototype[attr] = abstract[attr]

}

export default proto