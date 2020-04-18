import Encoder from "./encoder";
import NativeBase from "./native-base";
import Storagify from "./storagify";
import Parser from "./parser";
import Configurator from "./configurator";

export abstract class Worker {

    public abstract get(instance: Storagify, key: string): any;

    public abstract set(instance: Storagify, key: string, value: any, timestamp?: number): void;

    public abstract delete(instance: Storagify, key: string): void;

    public abstract list(instance: Storagify): string[];

    public abstract when(instance: Storagify, key: string): Date;

    public abstract clear(instance: Storagify): void;

    public abstract key(instance: Storagify, index: number): string | null;

    public abstract start(instance: Storagify): void;

    protected len(instance: Storagify): number {
        return instance.length;
    }

    protected from(instance: Storagify) {

        const encoder: Encoder = instance["[[encoder]]"];

        const parser: Parser = instance["[[parser]]"];

        const native: NativeBase = instance["[[native]]"];

        const configurator: Configurator = instance["[[configurator]]"];

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