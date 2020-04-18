import Encoder from "./encoder";
import StorageEnvironment from "./storage-environment";
import Storagify from "./storagify";

export class Configurator {

    private _key: string = '5c5a0bf45e5dd45f1eb610c1d98d7d5c';

    private _encoder: Encoder;

    constructor() {
        const key = this._key;
        const env = new StorageEnvironment(key);
        const encoder = new Encoder(env);
        this._encoder = encoder;
    }

    public start(instance: Storagify) {

        // set __config

        // set env

        // set empty[]

    }

    public update(key: string, value: string, timestamp: number) {

    }

    public when(key: string): Date {
        // return this.av64x4.when(str)
        return new Date()
    }

}

export default Configurator;