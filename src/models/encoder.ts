import StorageEnvironment from "./storage-environment";

export abstract class Encoder {

    protected _key: string;

    protected _devkey: string;

    constructor(env: StorageEnvironment) {
        this._key = env.key;
        this._devkey = env.devkey;
    }

    public abstract when(input: any): Date;

    public abstract hash(input: any): string;

    public abstract encode(input: any): any;

    public abstract decode(input: any): any;

}

export default Encoder;