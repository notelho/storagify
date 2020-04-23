import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class Convertor {

    readonly separator: string = '$T';

    constructor() { }

    public value(instance: Storagify, encryptedValue: string): any {

        const { encoder, parser } = getFrom(instance);

        const decryptedValue = encoder.decodeAES(encryptedValue);

        const { value } = this._split(decryptedValue);

        const parsed = parser.parse(value);

        return parsed;

    }

    public concat(instance: Storagify, value: any, timestamp: number): string {

        const { encoder, parser } = getFrom(instance);

        const stringTimestamp = parser.stringfy(timestamp);

        const stringValue = parser.stringfy(value);

        const concatenatedValue = `${stringValue}${this.separator}${stringTimestamp}`

        const encryptedValue = encoder.encodeAES(concatenatedValue);

        return encryptedValue;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { encoder, calls } = getFrom(instance);

        const encryptedKey = encoder.encodeDES(key);

        const encryptedValue = calls.getItem(encryptedKey);

        if (encryptedValue) {

            const decryptedValue = encoder.decodeAES(encryptedValue);

            const { timestamp } = this._split(decryptedValue);

            return new Date(timestamp);

        } else {

            return null;

        }

    }

    private _split(decryptedValue: string) {

        const splited = decryptedValue.split(this.separator);

        const len = splited.length;

        const timestamp: number = parseInt(splited[len - 1]);

        const value: string = splited.splice(len - 1, 1).join('');

        return { value, timestamp };

    }

}

export default Convertor;