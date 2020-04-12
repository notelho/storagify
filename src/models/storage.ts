import Environment from "./environment";
import Options from "./options";
import Proto from "./proto";
import Base from "./base";

export class Storage {

    private _env: Environment;

    constructor(key: string, options: Options) {

        if (!localStorage || !sessionStorage) {
            throw new Error('Storage instance not found');
        }

        if (!key || typeof key !== 'string') {
            throw new Error('String key not found');
        }

        const development = options.development || false;
        const stringify = options.stringify || false;
        const debug = options.debug || false;

        this._env = new Environment(key, development, debug, stringify);
    }

    public base() {
        const env = this._env;
        const base = new Base();
        base.start(env);
    }

    public proto() {
        const env = this._env;
        const proto = new Proto();
        proto.start(env);
    }

    public start() {
        localStorage.start();
        sessionStorage.start();
    }

}

export default Storage;