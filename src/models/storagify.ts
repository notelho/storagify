import NativeBase from "./native-base";
import StorageEnvironment from "./storage-environment";
import WorkerDevelopment from "./worker-development";
import WorkerProduction from "./worker-production";
import ConfiguratorDevelopment from "./configurator-development";
import ConfiguratorProduction from "./configurator-production";
import Convertor from "./convertor";
import Encoder from "./encoder";
import Parser from "./parser";

export interface Storagify extends Storage {

    // ==================================================

    readonly length: number;

    // ==================================================

    "[[environment]]": StorageEnvironment;

    "[[parser]]": Parser;

    "[[encoder]]": Encoder;

    "[[convertor]]": Convertor;

    "[[native]]": NativeBase;

    "[[development]]": {

        worker: WorkerDevelopment;

        config: ConfiguratorDevelopment;

    }

    "[[production]]": {

        worker: WorkerProduction;

        config: ConfiguratorProduction;

    }

    // ==================================================

    setItem(key: string, value: any): void;

    getItem(key: string): string;

    removeItem(key: string): void;

    clear(): void;

    key(index: number): string | null;

    // ==================================================

    list(): string[];

    when(key: string): Date | null;

    start(): void;

    // ==================================================

}

export default Storagify;