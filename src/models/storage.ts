import StorageEnvironment from "./storage-environment";
import StorageOptions from "./storage-options";
import PrototypeInstace from "./prototype-instance";
import PrototypeFunction from "./prototype-function";
import Storagify from "./storagify";

export class Storage {

    private _env: StorageEnvironment;

    private _key: string;

    constructor(key: string, options: StorageOptions) {

        this._key = key;

        this.throw();

        const development = options.development || false;
        const stringify = options.stringify || false;
        const debug = options.debug || false;

        this._env = new StorageEnvironment(key, development, debug, stringify);


    }

    public create() {

        const env = this._env;

        const prototypeInstace = new PrototypeInstace();

        const prototypeFunction = new PrototypeFunction();

        prototypeInstace.start(env);

        prototypeFunction.start(env);

    }

    public start() {

        <Storagify>localStorage.start();

        <Storagify>sessionStorage.start();

    }

    public throw() {

        if (!localStorage || !sessionStorage) {
            throw new Error('Storage instance not found');
        }

        if (!this._key || typeof this._key !== 'string') {
            throw new Error('String key not found');
        }

    }

}

export default Storage;