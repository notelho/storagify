import * as cryptojs from 'crypto-js';

export class Encoder {

    private _key: string;

    constructor(key: string) {
        this._key = key;
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