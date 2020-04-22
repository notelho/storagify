import NativeBase from "./native-base";
import StorageEnvironment from "./storage-environment";
import WorkerDevelopment from "./worker-development";
import WorkerProduction from "./worker-production";
import Parser from "./parser";
import Encoder from "./encoder";
import Configurator from "./configurator";
import Convertor from "./convertor";

export interface Storagify extends Storage {

    // ==================================================

    readonly length: number;

    // ==================================================

    "[[environment]]": StorageEnvironment;

    "[[parser]]": Parser;

    "[[encoder]]": Encoder;

    "[[development]]": WorkerDevelopment;

    "[[production]]": WorkerProduction;

    "[[native]]": NativeBase;

    "[[configurator]]": Configurator;

    "[[convertor]]": Convertor;

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