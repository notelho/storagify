import WorkerDevelopment from "./worker-development";
import WorkerProduction from "./worker-production";
import StorageEnvironment from "./storage-environment";
import EncoderParser from "./encoder-parser";
import EncoderEncryptor from "./encoder-encryptor";
import NativeBase from "./native-base";

export interface Storagify {

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

    key(index: number): string | undefined;

    // ==================================================

    type(): 'local storage' | 'session storage';

    env(): StorageEnvironment;

    worker(): Worker;

    // ==================================================

}