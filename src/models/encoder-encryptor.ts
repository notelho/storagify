import * as cryptojs from 'crypto-js';
import StorageEnvironment from './storage-environment';
import Encoder from './encoder';

export class EncoderEncryptor implements Encoder {

    aesKey: string;

    shaKey: string;

    constructor(env: StorageEnvironment) {



    }


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

export default EncoderEncryptor;