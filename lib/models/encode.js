import { AV64X4, encode64 } from '../av64x4/av64x4.js'
import errors from './errors.js'

export const encoder = new class {

    constructor() { }

    init(key) {
        this.av64x4 = new AV64X4(key)
    }

    hash(str) {
        return !this.dev ?
            encode64(str) :
            str
    }

    encode(str) {
        this._check('encode')
        return !this.dev ?
            this.av64x4.encode(str) : 
            str
    }

    decode(str) {
        this._check('decode')
        return !this.dev ?
            this.av64x4.decode(str) :
            str
    }

    _check(str) {
        if (!this.av64x4)
            throw errors.cannotBeforeInit(str)
    }
}

export default encoder