export class Environment {

    private _key: string;
    private _development: boolean;
    private _debug: boolean;
    private _stringify: boolean;

    constructor(
        key: string,
        development: boolean = false,
        debug: boolean = false,
        stringify: boolean = false
    ) {
        this._key = key;
        this._development = development;
        this._debug = debug;
        this._stringify = stringify;
    }

    public get key(): string {
        return this._key
    }

    public get development(): boolean {
        return this._development;
    }

    public get debug(): boolean {
        return this._debug;
    }

    public get stringify(): boolean {
        return this._stringify;
    }

}

export default Environment;