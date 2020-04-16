import StorageEnvironment from "./storage-environment";
import NativeBase from "./native-base";
import EncoderParser from "./encoder-parser";
import EncoderEncryptor from "./encoder-encryptor";
import Encoder from "./encoder";
import WorkerDevelopment from "./worker-development";
import WorkerProduction from "./worker-production";
import Worker from "./worker";

export interface Storagify extends Storage {

    // ==================================================

    readonly length: number;

    // ==================================================

    "[[environment]]": StorageEnvironment;

    "[[parser]]": EncoderParser;

    "[[encryptor]]": EncoderEncryptor;

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

    start(instance: Storagify): string | null;

    // ==================================================

    env(): StorageEnvironment;

    type(): 'local storage' | 'session storage';

    worker(): Worker;

    encoder(): Encoder;

    // ==================================================

}

export default Storagify;