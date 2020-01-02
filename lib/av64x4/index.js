import { encode } from './encoder.js'
import { decode } from './decoder.js'
import * as utils from './utils.js'

utils.create()

export class AV64X4 {

    constructor(key) {
        this.key = key
    }

    encode(str) {

        try {

            return encode(this.key, str)

        } catch (err) {

            throw new Error('Encode failed.')

        }

    }

    decode(str) {

        try {

            return decode(this.key, str)

        } catch (err) {

            throw new Error('Decode failed. Thats probably because the given string is not a valid hash or the given key is wrong.')

        }

    }

    hash(str) {

    }

}