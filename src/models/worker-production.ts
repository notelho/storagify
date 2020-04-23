import Worker from "./worker";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";

export class WorkerProduction extends Worker {

    public get(instance: Storagify, key: string): any {

        const { calls, encoder, convertor } = getFrom(instance);

        const encryptedKey = encoder.encodeDES(key);

        const encvalue = calls.getItem(encryptedKey);

        const value = convertor.value(instance, encvalue);

        return value;

    }

    public set(instance: Storagify, key: string, value: any): void {

        const { calls, encoder, convertor } = getFrom(instance);

        const timestamp = getTime();

        const encryptedValue = convertor.concat(instance, value, timestamp);

        const encryptedKey = encoder.encodeDES(key);

        calls.setItem(encryptedKey, encryptedValue);

    }

    public delete(instance: Storagify, key: string): void {

        const { calls, encoder } = getFrom(instance);

        const encryptedKey = encoder.encodeDES(key);

        calls.removeItem(encryptedKey);

    }

    public list(instance: Storagify): string[] {

        const { calls, encoder } = getFrom(instance);

        const emptyArray = new Array(instance.length);

        const indexArray = emptyArray.map((v, i) => i);

        const encryptedArray = indexArray.map(v => calls.key(v));

        const descryptedArray = encryptedArray.map(v => encoder.decodeDES(v || ''));

        return <string[]>descryptedArray;

    }

    public when(instance: Storagify, key: string): Date | null {

        const { convertor } = getFrom(instance);

        return convertor.when(instance, key);

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

        // verificar se existe a __config

        // 

    }

}

export default WorkerProduction;