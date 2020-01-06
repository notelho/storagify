import * as AV from '../av64x4/av64x4.js'
import errors from '../logs/errors.js'

export const encoder = new class {

    constructor() { }

    init(key) {
        this.av64x4 = new AV.AV64X4(key)
    }

    when(str) {
        this._check('check when')
        return this.av64x4.when(str)
    }

    hash(str) {
        return !this.dev ? AV.encode64(str) : str
    }

    fromHash(str) {
        return !this.dev ? AV.decode64(str) : str
    }

    encode(str) {
        this._check('encode')
        return !this.dev ? this.av64x4.encode(str) : str
    }

    decode(str) {
        this._check('decode')
        return !this.dev ? this.av64x4.decode(str) : str
    }

    _force_hash(str) {
        return AV.encode64(str)
    }

    _force_encode(str, timestamp = null) {
        this._check('encode')
        return this.av64x4.encode(str, timestamp)
    }

    _force_decode(str) {
        this._check('decode')
        return this.av64x4.decode(str)
    }

    _check(str) {
        if (!this.av64x4)
            errors.cannot_before_init(str)
    }
}

export default encoder