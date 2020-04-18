import StorageEnvironment from "./storage-environment";
import * as cryptojs from 'crypto-js';

export class Encoder {

    private _key: string;

    constructor(env: StorageEnvironment) {
        this._key = env.key;
    }

    public hash(str: string): string {
        const key = this._key;
        const hash = cryptojs.SHA1(str, key);
        const encoded = cryptojs.enc.Utf8.stringify(hash);
        return encoded;
    }

    public encode(str: string): string {
        const key = this._key;
        const encrypted = cryptojs.SHA1(str, key);
        const encoded = cryptojs.enc.Utf8.stringify(encrypted);
        return encoded;
    }

    public decode(str: string): string {
        const key = this._key;
        const decrypted = cryptojs.AES.decrypt(str, key);
        const encoded = cryptojs.enc.Utf8.stringify(decrypted);
        return encoded;
    }

}

export default Encoder;