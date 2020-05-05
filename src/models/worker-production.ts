import Worker from "./worker";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";

export class WorkerProduction extends Worker {

    public get(instance: Storagify, key: string): any {

        const { calls, convertor } = getFrom(instance);

        const encryptedKey = convertor.createProductionKey(instance, key);

        const encryptedValue = calls.getItem(encryptedKey);

        const value = convertor.getOriginalValue(instance, encryptedValue);

        return value;

    }

    public set(instance: Storagify, key: string, value: any): void {

        const { parser, configurator } = getFrom(instance);

        const timestamp = getTime();

        const stringValue = parser.stringfy(value);

        configurator.update(instance, key, stringValue, timestamp);

    }

    public delete(instance: Storagify, key: string): void {

        const { calls, convertor } = getFrom(instance);

        const encryptedKey = convertor.createProductionKey(instance, key);

        calls.removeItem(encryptedKey);

    }

    public list(instance: Storagify): string[] {

        const { calls, convertor } = getFrom(instance);

        const emptyArray = new Array(instance.length);

        const indexArray = emptyArray.map((v, i) => i);

        const encryptedArray = indexArray.map(v => calls.key(v));

        const descryptedArray = encryptedArray.map(key => {

            return convertor.getOriginalKey(instance, <string>key);

        });

        return descryptedArray;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { configurator } = getFrom(instance);

        return configurator.when(instance, key);

    }

    public clear(instance: Storagify): void {

        getFrom(instance).calls.clear();

    }

    public key(instance: Storagify, index: number): string | null {

        const { calls, encoder } = getFrom(instance);

        const key = calls.key(index);

        if (key) {

            return encoder.decodeDES(key);

        } else {

            return null;

        }

    }

    public start(instance: Storagify): void {

        // const { convertor } = getFrom(instance);

        // const isProd = convertor.isProd(instance);

        // if (!isProd) {

        //     convertor.toProduction(instance);

        // }

    }

}

export default WorkerProduction;