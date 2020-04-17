import NativeBase from "./native-base";
import StorageEnvironment from "./storage-environment";
import WorkerDevelopment from "./worker-development";
import WorkerProduction from "./worker-production";
import Worker from "./worker";
import Parser from "./parser";
import Encoder from "./encoder";

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

    // ==================================================

    setItem(key: string, value: any): void;

    getItem(key: string): string;

    removeItem(key: string): void;

    clear(): void;

    key(index: number): string | null;

    // ==================================================

    list(instance: Storagify): string[];

    when(key: string, instance: Storagify): Date;

    start(instance: Storagify): void;

    // ==================================================

}

export default Storagify;