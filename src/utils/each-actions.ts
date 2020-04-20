import Storagify from "../models/storagify";
import ConfigurationStorage from "../models/configuration-storage";
import NonPublic from "../models/non-public";

export type EachActionType = (args: EachActionArgs) => ConfigurationStorage;

export type EachActionArgs = {
    instance?: Storagify;
    config?: ConfigurationStorage;
    key?: string;
    value?: any;
    index?: number;
}

export function deleteFromConfig(args: EachActionArgs): ConfigurationStorage {
    let index = <number>args.index;
    let config = <ConfigurationStorage>args.config;
    config.its = config.its.splice(index, 1);
    return config;
}

export function createNewItem(args: EachActionArgs): ConfigurationStorage {

    const nonPublic = new NonPublic();

    let config = <ConfigurationStorage>args.config;

    let key = <string>args.key;


    // if !== config && prod config



    return config;
}

