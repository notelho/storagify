import Encoder from "./encoder";
import NativeBase from "./native-base";
import Storagify from "./storagify";
import Parser from "./parser";
import Configurator from "./configurator";

export abstract class Worker {

    public abstract get(key: string, instance: Storagify): any;

    public abstract set(key: string, value: any, instance: Storagify, timestamp?: number): void;

    public abstract delete(key: string, instance: Storagify): void;

    public abstract list(instance: Storagify): string[];

    public abstract when(key: string, instance: Storagify): Date;

    public abstract clear(instance: Storagify): void;

    public abstract key(index: number, instance: Storagify): string | null;

    public abstract start(instance: Storagify): void;

    protected len(instance: Storagify): number {
        return instance.length;
    }

    protected from(instance: Storagify) {

        const encoder: Encoder = instance['[[encoder]]'];

        const parser: Parser = instance['[[parser]]'];

        const native: NativeBase = instance['[[native]]'];

        const configurator: Configurator = instance['[[configurator]]'];

        const calls: NativeBase = {

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

            key: function (index: number) {
                return native.key.call(instance, index);
            },

        };

        return { encoder, parser, calls, configurator, native };
    }

}

export default Worker;