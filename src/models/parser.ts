import StorageEnvironment from "./storage-environment";
// import StorageEnvironment from './storage-environment.js';
// import Encoder from './encoder';
// import OutputParser from './output-parser';
// import OutputEncryptor from './output-encryptor';

export class Parser {

    private _stringfy: boolean;

    constructor(env: StorageEnvironment) {
        this._stringfy = env.stringify;
    }

    public parse(value?: any): any {
        try {
            return JSON.parse(<string>value);
        } catch (error) {
            return value;
        }
    }

    public stringfy(value?: any): string | void {
        try {
            return JSON.stringify(value);
        } catch (error) {
            return value;
        }
    }

    public apply(value?: any) {

        const stringfy = this._stringfy;

        if (stringfy) {

            return this.stringfy(value);

        }

        return value;
    }

}

export default Parser;