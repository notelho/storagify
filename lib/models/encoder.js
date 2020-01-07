import * as AV from '../av64x4/av64x4.js'

export class Encoder {

    constructor(key) {
        this.av64x4 = new AV.AV64X4(key)
    }

    when(str) {
        return this.av64x4.when(str)
    }

    hash(str) {
        return AV.encode64(str)
    }

    fromHash(str) {
        return AV.decode64(str)
    }

    encode(str) {
        return this.av64x4.encode(str)
    }

    decode(str) {
        return this.av64x4.decode(str)
    }

    _force_encode(str, timestamp = null) {
        return this.av64x4.encode(str, timestamp)
    }

    _force_decode(str) {
        return this.av64x4.decode(str)
    }

}

export default Encoder