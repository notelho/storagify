import * as defaultConfiguration from '../utils/default-configuration';
import Storagify from "./storagify";
import getFrom from "../utils/get-from";

export class Convertor {

    constructor() { }

    public toDevelopment(instance: Storagify): void {

    }

    public toProduction(instance: Storagify): void {

        // salvar as mudanças aqui = []

        // salvar a config aqui = []

        // se existir a config {

        //     pegar a config e salvar = no array

        //     deletar a config()

        // }

        // pra cada valor no storage  {

        //     verificar se existe a key na config

        //     se existir {

        //         timestamp = config[index].timestamp

        //     } se não existir {

        //         timestamp = getTime()

        //     }

        //     key = convertor.key

        //     value = convertor.concat(value, timestmap)

        //     mudanças.push({ delete: key, save: { key, value } })

        // }

        // pra cada mudança{

        //     call.remove(mudança.key)

        //     call.set(mudança.save.key, mudança.save.value)

        // }

    }

    public isProd(instance: Storagify): boolean {

        const { encoder, calls } = getFrom(instance);

        const firstKey = calls.key(0);

        if (firstKey) {

            try {

                const descryptedKey = encoder.decodeDES(firstKey);

                const productionName = defaultConfiguration.productionName;

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

        const originalKey = decryptedKey.replace(defaultConfiguration.productionName, '');

        return originalKey;

    }

    public createProductionKey(instance: Storagify, key: string): string {

        const { encoder } = getFrom(instance);

        const concatenatedKey = key + defaultConfiguration.productionName;

        const encryptedKey = encoder.encodeDES(concatenatedKey);

        return encryptedKey;

    }

    public createProductionValue(instance: Storagify, value: any, timestamp: number): string {

        const { encoder, parser } = getFrom(instance);

        const stringTimestamp = parser.stringfy(timestamp);

        const stringValue = parser.stringfy(value);

        const concatenatedValue = `${stringValue}${defaultConfiguration.productionSeparator}${stringTimestamp}`

        const encryptedValue = encoder.encodeAES(concatenatedValue);

        return encryptedValue;

    }

    public split(decryptedValue: string) {

        const splited = decryptedValue.split(defaultConfiguration.productionSeparator);

        const len = splited.length;

        const timestamp: number = parseInt(splited[len - 1]);

        const value: string = splited.splice(len - 1, 1).join('');

        return { value, timestamp };

    }

    public isValidName(key: string): boolean {

        return key !== defaultConfiguration.developmentName;

    }

}

export default Convertor;