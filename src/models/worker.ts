import Storagify from "./storagify";

export abstract class Worker {

    public abstract get(instance: Storagify, key: string): any;

    public abstract set(instance: Storagify, key: string, value: any, timestamp?: number): void;

    public abstract delete(instance: Storagify, key: string): void;

    public abstract list(instance: Storagify): string[];

    public abstract when(instance: Storagify, key: string): Date | null;

    public abstract clear(instance: Storagify): void;

    public abstract key(instance: Storagify, index: number): string | null;

    public abstract start(instance: Storagify): void;

}

export default Worker;