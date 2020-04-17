import * as cryptojs from 'crypto-js';
import StorageEnvironment from './storage-environment';
import Encoder from './encoder';
import OutputParser from './output-parser';
import OutputEncryptor from './output-encryptor';

export class EncoderEncryptor extends Encoder {

    constructor(env: StorageEnvironment) {
        super(env);
    }

    public when(input: OutputEncryptor): Date {
        // return this.av64x4.when(str)
        return new Date()
    }

    public hash(str: string): string {
        // return cryptojs.SHA1(sk + key)7

        return ''
    }

    public encode(input: OutputParser): OutputEncryptor {
        // cryptojs.AES.encrypt(value, ak)

        return ''
    }

    public decode(input: OutputEncryptor): OutputParser {

        // let decrypted = cryptojs.AES.decrypt(value, ak)

        //   return d.toString(cryptojs.enc.Utf8)

        return faeafe

    }

 
}

export default EncoderEncryptor;