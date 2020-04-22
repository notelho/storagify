import TypeStored from "./type-stored";
import Storagify from "./storagify";
import Encoder from "./encoder";
import getFrom from "../utils/get-from";
import getTime from "../utils/get-time";

export class Configurator {

    readonly key = "5c5a0bf45e5dd45f1eb610c1d98d7d5c";

    readonly name = "__storagify__development";

    private _encoder: Encoder;

    constructor() {
        this._encoder = new Encoder(this.key);
    }

    public update(instance: Storagify, key: string, timestamp: number) {

        const config = this._getConfig(instance);

        const keylist = config.map(item => item.k);

        const index = keylist.indexOf(key);

        if (index !== -1) {

            config[index].t = timestamp;

        } else {

            config.push({ k: key, t: timestamp });

        }

        this._setConfig(instance, config);

    }

    public when(instance: Storagify, key: string): Date | null {

        const config = this._getConfig(instance);

        const keylist = config.map(item => item.k);

        const index = keylist.indexOf(key);

        if (index !== -1) {

            const item = config[index];

            return new Date(item.t);

        } else {

            return null;

        }

    }

    public docheck(instance: Storagify): void {

        const { calls } = getFrom(instance);

        const config = calls.getItem(this.name);

        if (!config) {

            const newconfig: TypeStored[] = [];

            const emptyArray = new Array(instance.length);

            const indexArray = emptyArray.map((v, i) => i);

            const keysArray = indexArray.map(v => <string>calls.key(v));

            for (let key of keysArray) {

                if (this.isValidName(key)) {

                    newconfig.push({ k: key, t: getTime() });

                }

            }

            this._setConfig(instance, newconfig);

        }

    }

    public isValidName(key: string): boolean {

        return key !== this.name;

    }

    private _setConfig(instance: Storagify, config: TypeStored[]): void {

        const { calls, parser } = getFrom(instance);

        const stringvalue = parser.stringfy(config);

        const encoded = this._encoder.encodeAES(stringvalue);

        calls.setItem(this.name, encoded);

    }

    private _getConfig(instance: Storagify): TypeStored[] {

        const { calls, parser } = getFrom(instance);

        const stringvalue = calls.getItem(this.name);

        const decoded = this._encoder.decodeAES(stringvalue);

        return parser.parse(decoded);

    }

}

export default Configurator;