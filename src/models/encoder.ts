import * as cryptojs from 'crypto-js';

export class Encoder {

    private _key: string;

    constructor(key: string) {

        this._key = key;

    }

    public encodeDES(str: string): string {

        const key = this._key;

        const encrypted = cryptojs.DES.encrypt(str, key);

        const encoded = cryptojs.enc.Utf8.stringify(encrypted);

        return encoded;

    }

    public decodeDES(str: string): string {

        const key = this._key;

        const decrypted = cryptojs.DES.decrypt(str, key);

        const encoded = cryptojs.enc.Utf8.stringify(decrypted);

        return encoded;

    }

    public encodeAES(str: string): string {

        const key = this._key;

        const encrypted = cryptojs.AES.encrypt(str, key);

        const encoded = cryptojs.enc.Utf8.stringify(encrypted);

        return encoded;

    }

    public decodeAES(str: string): string {

        const key = this._key;

        const decrypted = cryptojs.AES.decrypt(str, key);

        const encoded = cryptojs.enc.Utf8.stringify(decrypted);

        return encoded;

    }

}

export default Encoder;