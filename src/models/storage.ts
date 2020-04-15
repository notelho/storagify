import StorageEnvironment from "./storage-environment";
import StorageOptions from "./storage-options";
import PrototypeInstace from "./prototype-instance";
import PrototypeFunction from "./prototype-function";

export class Storage {

    private _env: StorageEnvironment;

    constructor(key: string, options: StorageOptions) {

        if (!localStorage || !sessionStorage) {
            throw new Error('Storage instance not found');
        }

        if (!key || typeof key !== 'string') {
            throw new Error('String key not found');
        }

        const development = options.development || false;
        const stringify = options.stringify || false;
        const debug = options.debug || false;

        this._env = new StorageEnvironment(key, development, debug, stringify);
    }

    public create() {
        const env = this._env;
        const prototypeInstace = new PrototypeInstace();
        prototypeInstace.start(env);
    }

    public save() {
        const env = this._env;
        const prototypeFunction = new PrototypeFunction();
        prototypeFunction.start(env);
    }

    public start() {
        localStorage.start();
        sessionStorage.start();
    }

}

export default Storage;