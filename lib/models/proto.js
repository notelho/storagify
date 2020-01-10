import logger from '../logs/debug.js'
import type from './type.js'

const abstract = {

    list: function () {
        return logger(this, `Listing all keys in ${type(this)}..`,
            () => this.env().list(this)
        )
    },

    when: function (key) {
        return logger(this, `Returning creation date of ${key} in ${type(this)}..`,
            () => this.env().when(key, this)
        )
    },

    getItem: function (key) {
        return logger(this, `Returning value of ${key} in ${type(this)}..`,
            () => this.env().get(key, this)
        )
    },

    setItem: function (key, value) {
        return logger(this, `Setting value of ${key} in ${type(this)}..`,
            () => this.env().set(key, value, this)
        )
    },

    removeItem: function (key) {
        return logger(this, `Removing ${key} from ${type(this)}..`,
            () => this.env().delete(key, this)
        )
    },

    clear: function () {
        return logger(this, `Cleaning ${type(this)}..`,
            () => this.env().clear(this)
        )
    },

    _start: function () {
        return logger(this, `Initializing ${type(this)}..`,
            () => this.env().start(this)
        )
    }

}

export function proto(args) {

    for (let attr of Object.keys(abstract))

        Storage.prototype[attr] = abstract[attr]

    if (!String.prototype.includes)

        String.prototype.includes = function (search, start) {

            'use strict'

            if (typeof start !== 'number') start = 0

            if (start + search.length > this.length) return false

            else return this.indexOf(search, start) !== -1

        }
}

export default proto