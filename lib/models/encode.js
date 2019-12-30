import sha256 from '../encrypt/sha256.js'
import aes from '../encrypt/aes.js'

export const encode = new class {

    constructor() { }

    shaEncode(str) {
        return !this.dev ?
            sha256.encode(str, this.key) :
            str
    }

    aesEncode(str) {
        return !this.dev ?
            aes.encode(str, this.key) :
            str
    }

    aesDecode(str) {
        return !this.dev ?
            aes.decode(str, this.key) :
            str
    }

}

export default encode