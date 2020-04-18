import Encoder from "./encoder";

export class NonPublic {

    readonly key = "5c5a0bf45e5dd45f1eb610c1d98d7d5c";

    private _encoder: Encoder;

    constructor() {
        const key = this.key;
        const encoder = new Encoder(key);
        this._encoder = encoder;
    }

    public get encoder() {
        return this._encoder;
    }

}

export default NonPublic;