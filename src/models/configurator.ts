import Encoder from "./encoder";
import StorageEnvironment from "./storage-environment";
import Storagify from "./storagify";
import NonPublic from "./non-public";

export class Configurator {

    constructor() { }

    public start(instance: Storagify) {

        // set __config

        // set env

        // set empty[]

    }

    public update(key: string, value: string, timestamp: number) {

        const nonPublic = new NonPublic();

    }

    public when(key: string): Date {
        // return this.av64x4.when(str)
        return new Date()
    }

}

export default Configurator;