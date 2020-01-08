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

    value(str) {
        return AV.decode64(str)
    }

    encode(str, timestamp = null) {
        return this.av64x4.encode(str, timestamp)
    }

    decode(str) {
        return this.av64x4.decode(str)
    }

}

export default Encoder