// encoder extends encoder

// import Parsed from "../models/parsed";

// export function parser(

//     any: any,

// ): Parsed {

//     return {

//         value: '',

//         timestamp: 1

//     }

// }

import StorageEnvironment from './storage-environment.js';

export class EncoderParser {

    constructor(env: StorageEnvironment) { }


    when(str) {
        // return this.av64x4.when(str)
    }


    hash(str) {
        // return cryptojs.SHA1(sk + key)
    }

    value(str) {
        // return AV.decode64(str)
    }


    encode(str, timestamp = null) {

        // cryptojs.AES.encrypt(value, ak)

    }


    decode(str) {

        // let d = cryptojs.AES.decrypt(value, ak)

        //   return d.toString(cryptojs.enc.Utf8)

    }


}

export default EncoderParser;