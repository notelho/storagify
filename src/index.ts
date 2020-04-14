import Options from "./models/options";
import Storage from './models/storage';

var storage: Storage | null = null;

export function init(key: string, options: Options = {}): void {

    try {

        if (!storage) {

            storage = new Storage(key, options);

            storage.save();
            storage.create();
            storage.start();

        } else {

            throw new Error('Storage cannot be initialized twice');

        }

    } catch (error) {

        throw error;

    }

}

export default init;