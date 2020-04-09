import { config } from '../utils/config.js'
import { type } from '../utils/type.js'

const foo = {

    list: function () {
        return config(this, `Listing all keys in ${type(this)}..`,
            () => this.env().list(this)
        )
    },

    when: function (key) {
        return config(this, `Returning creation date of ${key} in ${type(this)}..`,
            () => this.env().when(key, this)
        )
    },

    getItem: function (key) {
        return config(this, `Returning value of ${key} in ${type(this)}..`,
            () => this.env().get(key, this)
        )
    },

    setItem: function (key, value) {
        return config(this, `Setting value of ${key} in ${type(this)}..`,
            () => this.env().set(key, value, this)
        )
    },

    removeItem: function (key) {
        return config(this, `Removing ${key} from ${type(this)}..`,
            () => this.env().delete(key, this)
        )
    },

    clear: function () {
        return config(this, `Cleaning ${type(this)}..`,
            () => this.env().clear(this)
        )
    },

    start: function () {
        return config(this, `Initializing ${type(this)}..`,
            () => this.env().start(this)
        )
    }

}

export function proto(args, init) {

    if (!init)
        for (let attr of Object.keys(foo))
            Storage.prototype[attr] = foo[attr]

    if (!init && !String.prototype.includes)
        String.prototype.includes = function (search, start) {
            'use strict'
            if (typeof start !== 'number') start = 0
            if (start + search.length > this.length) return false
            else return this.indexOf(search, start) !== -1
        }
}