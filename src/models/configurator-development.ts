import * as defaults from '../utils/default-configuration';
import Configurator from "./configurator";
import TypeStored from "./type-stored";
import Storagify from "./storagify";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";

export class ConfiguratorDevelopment extends Configurator {

    constructor() {
        super();
    }

    public update(instance: Storagify, key: string, value: string, timestamp: number): void {

        this._doCheck(instance);

        const { calls } = getFrom(instance);

        const config = this._getConfig(instance);

        const keyList = config.map(item => item.k);

        const index = keyList.indexOf(key);

        if (index !== -1) {

            config[index].t = timestamp;

        } else {

            config.push({ k: key, t: timestamp });

        }

        calls.setItem(key, value);

        this._saveConfig(instance, config);

    }

    public when(instance: Storagify, key: string): Date | null {

        this._doCheck(instance);

        const config = this._getConfig(instance);

        const keyList = config.map(item => item.k);

        const index = keyList.indexOf(key);

        if (index !== -1) {

            const item = config[index];

            return new Date(item.t);

        } else {

            return null;

        }

    }

    private _doCheck(instance: Storagify): void {

        const { calls, convertor } = getFrom(instance);

        const config = calls.getItem(defaults.developmentName);

        if (!config) {

            const newConfig: TypeStored[] = [];

            const emptyArray = new Array(instance.length);

            const indexArray = emptyArray.map((v, i) => i);

            const keysArray = indexArray.map(v => <string>calls.key(v));

            for (let key of keysArray) {

                if (convertor.isValidName(key)) {

                    newConfig.push({ k: key, t: getTime() });

                }

            }

            this._saveConfig(instance, newConfig);

        }

    }

    private _saveConfig(instance: Storagify, config: TypeStored[]): void {

        const { calls, parser } = getFrom(instance);

        const stringValue = parser.stringfy(config);

        const encoded = this.encoder.encodeAES(stringValue);

        const developmentKey = defaults.developmentKey;

        calls.setItem(developmentKey, encoded);

    }

    private _getConfig(instance: Storagify): TypeStored[] {

        const { calls, parser } = getFrom(instance);

        const developmentKey = defaults.developmentKey;

        const stringValue = calls.getItem(developmentKey);

        const decoded = this.encoder.decodeAES(stringValue);

        return parser.parse(decoded);

    }

}

export default ConfiguratorDevelopment;