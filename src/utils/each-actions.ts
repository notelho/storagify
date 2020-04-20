import Storagify from "../models/storagify";
import ConfigurationStorage from "../models/configuration-storage";

export type EachActionType = (args: EachActionArgs) => ConfigurationStorage;

export interface EachActionArgs {

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