import Encoder from "./encoder";
import Calls from "./calls";

export abstract class Worker {

    public abstract get(key: string, instance: Storage): any;

    public abstract set(key: string, value: any, instance: Storage, timestamp?: number): void;

    public abstract delete(key: string, instance: Storage): void;

    public abstract list(instance: Storage): string[];

    public abstract when(key: string, instance: Storage): Date;

    public abstract clear(instance: Storage): void;

    public abstract start(instance: Storage): void;

    protected len(instance: Storage): number {
        return instance.length;
    }

    protected from(instance: Storage) {

        const encoder: Encoder = instance['__encoder'];
        const native: Calls = instance['__native'];
        const calls = {

            setItem: function (key: string, value: any) {
                return native.setItem.call(instance, key, value);
            },

            getItem: function (key: string) {
                return native.getItem.call(instance, key);
            },

            removeItem: function (key: string) {
                return native.removeItem.call(instance, key);
            },

            clear: function () {
                return native.clear.call(instance);
            },

        }

        return { encoder, calls };
    }

}