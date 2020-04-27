import * as defaults from './default-configuration';
import Storagify from "../models/storagify";
import getFrom from "./get-from";

export function describer(instance: Storagify, action: string): void {

    const { type, environment } = getFrom(instance);

    if (environment.debug) {

        const key: string = defaults.describeKey;

        const message: string = action.replace(key, type);

        console.warn(message);

    }

}

export default describer;