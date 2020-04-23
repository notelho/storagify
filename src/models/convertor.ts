import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class Convertor {

    readonly separator: string = '$T';

    constructor() { }

    public value(instance: Storagify, encvalue: string): any {

        const { encoder, parser } = getFrom(instance);

        const decvalue = encoder.decodeAES(encvalue);

        const { value } = this._split(decvalue);

        const parsed = parser.parse(value);

        return parsed;

    }

    public concat(instance: Storagify, value: any, timestamp: number): string {

        const { encoder, parser } = getFrom(instance);

        const stringtimestamp = parser.stringfy(timestamp);

        const stringvalue = parser.stringfy(value);

        const concatenated = `${stringvalue}${this.separator}${stringtimestamp}`

        const encvalue = encoder.encodeAES(concatenated);

        return encvalue;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { encoder, calls } = getFrom(instance);

        const enckey = encoder.encodeDES(key);

        const encvalue = calls.getItem(enckey);

        if (encvalue) {

            const decvalue = encoder.decodeAES(encvalue);

            const { timestamp } = this._split(decvalue);

            return new Date(timestamp);

        } else {

            return null;

        }

    }

    private _split(decvalue: string) {

        const splited = decvalue.split(this.separator);

        const len = splited.length;

        const timestamp: number = parseInt(splited[len - 1]);

        const value: string = splited.splice(len - 1, 1).join('');

        return { value, timestamp };

    }

}

export default Convertor;