import logger from '../logs/debug.js'
import type from './type.js'

const abstract = {

    list: function () {
        return logger(this, `Listing all keys in ${type(this)}..`,
            () => this.env().list()
        )
    },

    when: function (key) {
        return logger(this, `Returning creation date of ${key} in ${type(this)}..`,
            () => this.env().when(key)
        )
    },

    getItem: function (key) {
        return logger(this, `Returning value of ${key} in ${type(this)}..`,
            () => this.env().get(key)
        )
    },

    setItem: function (key, value) {
        return logger(this, `Setting value of ${key} in ${type(this)}..`,
            () => this.env().set(key, value, null)
        )
    },

    removeItem: function (key) {
        return logger(this, `Removing ${key} from ${type(this)}..`,
            () => this.env().delete(key)
        )
    },

    clear: function () {
        return logger(this, `Cleaning ${type(this)}..`,
            () => this._clear()
        )
    },

    _start: function () {
        return logger(this, `Initializing ${type(this)}..`,
            () => this.env().start()
        )
    }

}

export function proto(args) {

    for (let attr of Object.keys(abstract))

        Storage.prototype[attr] = abstract[attr]

}

export default proto