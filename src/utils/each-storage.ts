import Storagify from "../models/storagify";
import ConfigurationStorage from "../models/configuration-storage";
import * as eachActions from './each-actions'
import getCalls from "./get-calls";

export function checkIfKeyExists(

    instance: Storagify,

    config: ConfigurationStorage,

    trueAction: eachActions.EachActionType | false,

    falseAction: eachActions.EachActionType | false,

): ConfigurationStorage {

    const calls = getCalls(instance);

    const len = instance.length;

    for (let i = 0; i < len; i++) {

        const key = calls.key(i) || '';
        const item = calls.getItem(key);

        const availableNames = config.its.map(obg => obg.n);
        const availableConf = availableNames.indexOf(key) !== -1;

        const args = { key, config };

        if (key && item && availableConf && trueAction) {

            return trueAction(args);

        } else if (key && item && falseAction) {

            return falseAction(args);

        }

    }

    return config
} 