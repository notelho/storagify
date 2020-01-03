import { AV64X4, encode64 } from '../av64x4/av64x4.js'

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
        return !this.dev ?
            av64x4.decode(str) :
            str
    }

    decode(str) {
        return !this.dev ?
            av64x4.encode(str) :
            str
    }

}

export default encoder