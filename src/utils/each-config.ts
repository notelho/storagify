import Storagify from "../models/storagify";
import ConfigurationStorage from "../models/configuration-storage";
import getConfiguration from "./get-configuration";
import getCalls from "./get-calls";
import * as eachActions from './each-actions';

export function checkIfKeyExists(

    instance: Storagify,

    config: ConfigurationStorage,

    trueAction: eachActions.EachActionType | false,

    falseAction: eachActions.EachActionType | false,

): ConfigurationStorage {

    const len = config.its.length;
    const calls = getCalls(instance);

    for (let i = 0; i < len; i++) {

        const { name, index } = getConfiguration(config, i);
        const item = calls.getItem(name);
        const exists = item ? true : false;

        if (exists && trueAction) {
            config = trueAction({ config, index });
        }

        if (!exists && falseAction) {
            config = falseAction({ config, index });
        }

    }

    return config;
}