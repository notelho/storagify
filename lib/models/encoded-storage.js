import sha256 from '../encrypt/sha256.js'
import aes from '../encrypt/aes.js'

export class EncodedStorage {

    constructor(options) {

        Object.keys(options)
            .map(key => this[`_${key}`] = options[key])

    }

    _shaEncode(str) {
        return !this._dev ?
            sha256.encode(str, this._key) :
            str
    }

    _aesEncode(str) {
        return !this._dev ?
            aes.encode(str, this._key) :
            str
    }

    _aesDecode(str) {
        return !this._dev ?
            aes.decode(str, this._key) :
            str
    }

}