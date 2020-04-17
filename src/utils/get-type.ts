import Storagify from "../models/storagify";

export function getType(instance: Storagify): string {

    if (instance === localStorage) {
        return 'local storage';
    } else {
        return 'session storage';
    }

}

export default getType;