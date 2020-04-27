import Storagify from "./storagify";
import TypeAction from './type-action';
import TypeStored from "./type-stored";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";
import * as defaults from '../utils/default-configuration';

export class Convertor {

    constructor() { }

    public toDevelopment(instance: Storagify): void {

    }

    public toProduction(instance: Storagify): void {

        const { convertor, calls, parser } = getFrom(instance);

        const developmentName = defaults.developmentName;

        const config = calls.getItem(developmentName);

        let storageActions: TypeAction[] = [];

        let oldConfig: TypeStored[] = [];

        if (config) {

            oldConfig = parser.parse(config);

            calls.removeItem(developmentName);

        }

        const emptyArray = new Array(instance.length);

        const indexArray = emptyArray.map((v, i) => i);

        const keysArray = indexArray.map(v => calls.key(v) || '');

        for (let key of keysArray) {

            let configIndex = oldConfig.map(t => t.k).indexOf(key);

            let timestamp: number;

            let value = calls.getItem(key);

            if (configIndex !== -1) {

                timestamp = oldConfig[configIndex].t;

            } else {

                timestamp = getTime();

            }

            const storageAction = {
                delete: key,
                save: {
                    key: convertor.createProductionKey(instance, key),
                    value: convertor.createProductionValue(instance, value, timestamp)
                }
            };

            storageActions.push(storageAction);

        }

        for (let action of storageActions) {

            calls.removeItem(action.delete);

            calls.setItem(action.save.key, action.save.value);

        }

    }

    public isProd(instance: Storagify): boolean {

        const { encoder, calls } = getFrom(instance);

        const firstKey = calls.key(0);

        if (firstKey) {

            try {

                const descryptedKey = encoder.decodeDES(firstKey);

                const productionName = defaults.productionName;

                const isProd = descryptedKey.includes(productionName);

                if (isProd) {
                    return true;
                }

            } catch (error) {

                return false;

            }

        }

        return false

    }

    public getOriginalValue(instance: Storagify, encryptedValue: string): any {

        const { encoder, parser, convertor } = getFrom(instance);

        const decryptedValue = encoder.decodeAES(encryptedValue);

        const { value } = convertor.split(decryptedValue);

        const parsed = parser.parse(value);

        return parsed;

    }

    public getOriginalKey(instance: Storagify, encryptedKey: string): string {

        const { encoder } = getFrom(instance);

        const decryptedKey = encoder.decodeAES(encryptedKey);

        const originalKey = decryptedKey.replace(defaults.productionName, '');

        return originalKey;

    }

    public createProductionKey(instance: Storagify, key: string): string {

        const { encoder } = getFrom(instance);

        const concatenatedKey = key + defaults.productionName;

        const encryptedKey = encoder.encodeDES(concatenatedKey);

        return encryptedKey;

    }

    public createProductionValue(instance: Storagify, value: any, timestamp: number): string {

        const { encoder, parser } = getFrom(instance);

        const stringTimestamp = parser.stringfy(timestamp);

        const stringValue = parser.stringfy(value);

        const concatenatedValue = `${stringValue}${defaults.productionSeparator}${stringTimestamp}`

        const encryptedValue = encoder.encodeAES(concatenatedValue);

        return encryptedValue;

    }

    public split(decryptedValue: string) {

        const splited = decryptedValue.split(defaults.productionSeparator);

        const len = splited.length;

        const timestamp: number = parseInt(splited[len - 1]);

        const value: string = splited.splice(len - 1, 1).join('');

        return { value, timestamp };

    }

    public isValidName(key: string): boolean {

        return key !== defaults.developmentName;

    }

}

export default Convertor;